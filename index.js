require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! jaana broo')
})
app.get('/pranav',(req, res) =>{
    res.send('Pranav Sarwe')
})

app.get('/login',(req, res) =>{
    res.send('<h1> Please login at chai aur code</h1>')
})

app.get('/youtube',(req, res) =>{
    res.send('<h2>Coffee and Code </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Coffee app listening on port ${port}`)
})
