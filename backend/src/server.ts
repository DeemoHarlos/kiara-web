import express from 'express'
import { SHEET, getData } from './db'

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

app.get('/:ID', async (req, res) => {
  const ID = req.params.ID as SHEET
  const data = await getData(ID)
  res.json(data)
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}.`)
})
