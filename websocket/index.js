const ProductManager = require('../managers/ProductManager.js')
const productManager = new ProductManager('productos.json')

function socketManager(socket) {
  console.log(`user has connected: ${socket.id}`)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  setTimeout( async () => {
    const product = await productManager.getAll()
    socket.emit('event', product)                       // el evento recibido y enviado tienen que tener el mismo nombre
  }, 700)







}

module.exports = socketManager