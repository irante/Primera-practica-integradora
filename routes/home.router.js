const { Router } = require('express')
const path = require('path')
const ProductManager = require('../managers/ProductManager')
const productManager = new ProductManager('productos.json')

const router = Router()


router.get('/', async (req, res) => {
  
  const products = await productManager.getAll()
  

  res.render('home', {                  // renderizamos la plantilla home.handlebars como inicio.  http://localhost:8080/
    title: 'Bienvenido a la Tienda!',
    products,
   
    
  })

  

})



module.exports = router