import express from 'express'
import artigosController from '../controllers/ArtigosController.js'
const router = express.Router()




router.get(
    '/',
    artigosController.consultarTodos
)

router.post(
    '/',
    artigosController.crearArtigo
)

router.route('/:codigo')
    .get(artigosController.verDetalleArtigo)
    .delete(artigosController.eliminarArtigo)
    .put(artigosController.actualizarArtigo)
    
export default router