import FS from 'fs'
import readline from 'readline'
import { google as Google, Auth } from 'googleapis'

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const CRENDENTIAL_PATH = 'secret/credentials.json'
const TOKEN_PATH = 'secret/token.json'

// Load client secrets from a local file.
const credentials: JSON = JSON.parse(FS.readFileSync(CRENDENTIAL_PATH, 'utf8'))
// console.error('Error loading client secret file:', err)

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {any} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function authorize(credentials: any, callback: (auth: Auth.OAuth2Client) => void) {
  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new Google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0],
  )

  // Check if we have previously stored a token.
  FS.readFile(TOKEN_PATH, 'utf8', (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback)
    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client)
  })
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {Auth.OAuth2Client} oAuth2Client The OAuth2 client to get token for.
 * @param {(auth: Auth.OAuth2Client) => void} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client: Auth.OAuth2Client, callback: (auth: Auth.OAuth2Client) => void) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error('Error while trying to retrieve access token', err)
      if (!token)
        return console.error(`Access token value error: ${token}`)
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      FS.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client)
    })
  })
}

/**
 * get a 2-dimension array of data from a worksheet.
 * @param {string} spreadsheetId The id of the spreadsheet in which the worksheet is.
 * @param {string} sheetTitle The title of the worksheet.
 * @param {string} range The range desired. It should be in a valid range format, e.g. A3:E5.
 * If not specified, returns the data of the whole worksheet.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getSheetData(
  spreadsheetId: string,
  sheetTitle: string,
  range?: string,
): Promise<any[][]> {
  // Authorize a client with credentials, then call the Google Sheets API.
  return new Promise((resolve, reject) => {
    authorize(credentials, (auth: Auth.OAuth2Client) => {
      const sheets = Google.sheets({ version: 'v4', auth })
      sheets.spreadsheets.values.get(
        {
          spreadsheetId,
          range: range ? `${sheetTitle}!${range}` : sheetTitle,
        },
        (err, res) => {
          if (err) return reject('The API returned an error: ' + err)
          if (!res?.data?.values) return reject(`API response value error: ${res}`)
          resolve(res.data.values)
        },
      )
    })
  })
}
