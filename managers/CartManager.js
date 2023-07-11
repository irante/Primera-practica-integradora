const fs = require('fs/promises');
const path = require('path');

class CartManager {
  #productos = [];
  #carts = [];

  constructor(filename) {
    this.filename = filename;
    this.filepath = path.join(__dirname, '../data', this.filename);
  }

  #readFile = async () => {
    const data = await fs.readFile(this.filepath, 'utf-8');
    this.#carts = JSON.parse(data)


  };

  #writeFile = async() => {
    const data = JSON.stringify(this.#carts, null, 2)
    await fs.writeFile(this.filepath, data)
  }


  // Agregar Carrito

  async create(carrito) {
    await this.#readFile()

    const id = (this.#carts[this.#carts.length - 1]?.id || 0) + 1

    const newCart = {id: id, products:[]}
     
  
    this.#carts.push(newCart)

    await this.#writeFile()

    return newProduct
  }

  // obtener los productos del carrito con id especificado

  async getProductsByCartId(cartId) {
    await this.#readFile();

    const cart = this.#carts.find((cart) => cart.id == cartId);

    if (!cart) {
      return "carrito no encontrado";
    }
    
    return cart.products;
  }




}

module.exports = CartManager;