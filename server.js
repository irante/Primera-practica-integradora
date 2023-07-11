const express = require('express')
const routes = require ('./routes') 

const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/api', routes)     // hacer que todas las rutas /api usen routes (index.js de api que a su vez contiene las rutas de usuarios, productos,etc)  ********





const port = 8080

app.listen(port, () => {
  console.log(`Express Server listening at http://localhost:${port}`)
})