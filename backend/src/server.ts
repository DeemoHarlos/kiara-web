import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

import https from 'https'

import { SHEET, getData } from './db'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const app = express()
const port = 2434

console.log('Starting server ...')
// application/json
app.use(express.json())
// application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }))
app.enable('trust proxy')
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/:ID', async(req, res) => {
  const ID = req.params.ID as SHEET
  const data = await getData(ID)
  res.json(data)
})

https.createServer({
  key: '/etc/letsencrypt/live/cloud.harlos.me/privkey.pem',
  cert: '/etc/letsencrypt/live/cloud.harlos.me/fullchain.pem',
}, app).listen(port)
console.log(`Server is listening on ${port}.`)
