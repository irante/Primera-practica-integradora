//importamos router de productos y carrito

const ProductRouter = require('./api/products.router')    // importo el router de productos
const CartRouter = require('./api/Cart.router')    // importo el router de carrito



// creamos un router de los otros routers

const { Router } = require('express')
const router = Router()

// rutas de productos
router.use('/products', ProductRouter)        // hacer que todas las rutas: /products usen el archivo product.router.js




// rutas de Carrito

router.use('/carts', CartRouter)



module.exports = router       

