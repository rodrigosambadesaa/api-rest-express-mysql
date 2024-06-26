// const express = require('express') // commonjs
import express from 'express' // ES modules

import petRouter from './routers/petRouter.js'

import { PORT } from './constants.js'
const app = express()
app.use(express.json())


// Rutas
app.get(
    '/',
    (_, res) => {
        res.status(200).send("Home")
    }
)

app.use('/pets', petRouter)




app.listen(
    PORT,
    () => {
        console.log('Servidor abierto en puerto ' + PORT)
    }
)
