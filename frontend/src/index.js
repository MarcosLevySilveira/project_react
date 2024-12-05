const express = require('express')
const app = express()
const port = 3000

//Express methods: CRUD
//get => read
// Rout => / = root/home page
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// /about => about us
// /contact => contact us
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})