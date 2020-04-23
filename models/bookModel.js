const mongoose = require('mongoose');

const { Schema } = mongoose;

// Everything in Mongoose starts with a Schema. 
//Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const bookModel = new Schema(
  {
    title: {type:String},
    author: {type:String},
    genre: {type:String},
    read: {type:Boolean, default: false},
  });

  // To use our schema definition, we need to convert our blogSchema into a Model 
  //we can work with. To do so, we pass it into mongoose.model(modelName, schema):
  module.exports = mongoose.model('Book', bookModel);
