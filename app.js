const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const addItem = require('./notion.js')

app.get('/', (req, res) => {
  addItem({ title: "Yurts in Big Sur, California"})
})

app.listen(port, () => {
  console.log('121212112')
})