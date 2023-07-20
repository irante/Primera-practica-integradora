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







// Agregar productos al carrito  Post http://localhost:8080/api/carts/1/products/3

router.post('/:idcart/products/:idprod', async (req, res) => {
  const {idcart, idprod } = req.params

   await cartmanager.AgregarProducto(idcart, idprod)

  res.send(idprod)
})




module.exports = router