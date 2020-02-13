require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./products_controller')

const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch((err) => { console.log(err) })



app.get('/api/products', controller.getAll)
app.get('/api/products/:id', controller.getOne)
app.put('/api/products/:id', controller.update)
app.post('/api/products', controller.create)
app.delete('/api/products/:id', controller.delete)


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
})