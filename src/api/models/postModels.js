// src/api/models/postModel.js
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const {Schema} = mongoose;

let postSchema = new Schema({
  title: {
    type: String,
    required: "Le titre est requis"
  },
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Post', postSchema)
