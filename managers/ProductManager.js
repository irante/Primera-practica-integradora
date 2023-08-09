
const fs = require('fs/promises')
const path = require('path')
const productModel = require('../models/product.model')



class ProductManager {
  

  
  //Obtener todos los productos

  async getAll() {
    const products = await productModel.find().lean()       // lo que regresa el array es un objeto de moongose, lean() lo convierte en un objeto de js
    return products
  }

  //Obtener Productos por id

  async getById(id) {
    const products = await productModel.find({ _id: id })

    return products[0]  // regresa el primero de la lista
  }

 
  // Agregar Producto
  async create(product) {
    const producto = await productModel.create(product)
    return producto
  }


  // Actualizar producto
  async update(id, product) {

    const result = await productModel.updateOne({ _id: id }, product)

    return result
   
  }


  // Eliminar productos

  async delete(id) {
   
      const result = await productModel.deleteOne({ _id: id })
  
      return result
   
  }


}




module.exports = new ProductManager() // singleton => se exporta la instancia que se usara el otros modulos. Cada modulo no tendrea que instanciar nuevamente