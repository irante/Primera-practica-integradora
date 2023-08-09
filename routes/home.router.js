const { Router } = require('express')

const productManager = require('../managers/ProductManager')


const router = Router()


router.get('/', async (req, res) => {
  
  const products = await productManager.getAll()
  
  

  res.render('home', {                  // renderizamos la plantilla home.handlebars como inicio.  http://localhost:8080/
    title: 'Bienvenido a la Tienda!',
    products,
   
    
  })

  

})


module.exports = router