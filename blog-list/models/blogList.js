/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-sequences */
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const { MONGODB_URI } = process.env

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('database connected')
  })
  .catch((error) => {
    console.log(process.env.MONGODB_URI)
    console.log(error, 'couldnt connect to database')
  })

const blogListSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

blogListSchema.set('toJSON', {
  transform: (document, newDocument) => {
    newDocument.id = newDocument._id.toString(),
    delete newDocument.__v,
    delete newDocument._id
  },
})

module.exports = mongoose.model('BlogList', blogListSchema)
