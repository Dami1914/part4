const express = require('express')

const app = express()

app.use(express.json())

const BlogList = require('./models/blogList')

app.get('/api/bloglist', (request, response) => {
  BlogList.find({})
    .then((res) => {
      response.send(res)
    })
    .catch((err) => {
      response.send(err)
    })
})

app.post('/api/bloglist', (request, response) => {
  console.log(request)
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`)
})
