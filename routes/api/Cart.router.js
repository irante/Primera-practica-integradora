const { Router } = require('express')
const router = Router()

const CartManager = require('../../managers/CartManager.js')
const cartmanager = new CartManager('carrito.json')




// Crear carrito con id autogenerado post http://localhost:8080/api/carts/
router.post('/', async (req, res) => {
   
  await cartmanager.create()

res.send("Carrito Creado")
})


//Obtener productos del carrito que tenga el id dado.

router.get('/:id', async (req, res) => {
  let id = req.params.id
   const products = await cartmanager.getProductsByCartId(id)

  if(!products){

    return "Carrito no Encontrado"
  }else{
  

    res.send(products);
  }

    
});







/*

// Obtener productos por id del carrito   Get http://localhost:8080/api/carts/2

router.get('/:id', async (req, res) => {
    let id = req.params.id  
    let productos = await cartmanager.getById(id)

  res.send(productos)
})



// Agregar productos al carrito  Post http://localhost:8080/api/carts/

router.post('/', async (req, res) => {
  const { body } = req

  const created = await cartmanager.create(body)

  res.send(created)
})

*/


module.exports = router