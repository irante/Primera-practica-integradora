const { Schema, model } = require('mongoose')


const schema = new Schema({
  title: String,
  descripcion: String,
  price: Number,
  thumbnail: String,
  code: String,
  stock: { type: Number, default: 0 },
  createdDate: { type: Number, default: Date.now() }
})

const productModel = model('products', schema)     //(nombre de la coleccion , esquema)

module.exports = productModel