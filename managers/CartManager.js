const fs = require('fs/promises');
const path = require('path');

class CartManager {
  #products = [];
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

    return newCart
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



// Agregar productos al carrito

async AgregarProducto(idcart, Idprod) {

  await this.#readFile()
  
  
  let index = this.#carts.findIndex(el => el.id === parseInt(idcart))  // verifica si existe un carrito con ese id. Daba error debido a que traia el parametro como string

 
  if (index < 0) throw new Error ("Cart not found")
  
  const productIndex = this.#carts[index].products.findIndex(item => item.id === parseInt(Idprod)) // aqui verificas si el carrito ya tiene un producto con el id que viene por params
  
  if (productIndex >= 0) { // si existe aqui se aumenta la cantidad
  
  const newProduct = {
  
  id: Idprod,
  
  quantity: this.#carts[index].products[productIndex].quantity + 1,
  
  }
  
  this.#carts[index].products[productIndex] = newProduct
  
  } else { // si aun no existe el producto en el carrito lo agrega
  
  const newProduct = {
  
  id: Idprod,
  
  quantity: 1
  
  }
  
  this.#carts[index].products.push(newProduct)
  
  }
  
  this.#writeFile()
  
  return this.#carts[index].products
  
  }







}






module.exports = CartManager;