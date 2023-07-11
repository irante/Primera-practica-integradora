
const fs = require('fs/promises')
const path = require('path')

class ProductManager {

  #products = []        // variable privada, no podemos acceder a ella desde fuera de la clase.

  constructor(filename) {
    this.filename = filename
    this.filepath = path.join(__dirname, '../data', this.filename)     
  }

  #readFile = async () => {
    const data = await fs.readFile(this.filepath, 'utf-8')
    this.#products = JSON.parse(data)
  }

  #writeFile = async() => {
    const data = JSON.stringify(this.#products, null, 2)
    await fs.writeFile(this.filepath, data)
  }

  
  //Obtener todos los productos

  async getAll() {
    await this.#readFile()

    return this.#products
  }

  //Obtener Productos por id

  async getById(id) {
    await this.#readFile()

    return this.#products.find(p => p.id == id)
  }

 
  // Agregar Producto
  async create(product) {
    await this.#readFile()

    const id = (this.#products[this.#products.length - 1]?.id || 0) + 1

    const newProduct = {
      ...product,
      id
    }

    this.#products.push(newProduct)

    await this.#writeFile()

    return newProduct
  }


  //
  async save(id, product) {
    await this.#readFile()

    const existing = await this.getById(id)

    if (!existing) {
      return
    }

    const {
      title,
      description,
      stock,
      price,
      keywords
    } = product

    existing.title = title
    existing.description = description
    existing.stock = stock
    existing.price = price
    existing.keywords = keywords

    await this.#writeFile()
  }


  // Eliminar productos

  async delete(id) {
    await this.#readFile()

    this.#products = this.#products.filter(p => p.id != id)

    await this.#writeFile()
  }


}


module.exports = ProductManager

