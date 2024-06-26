import express from 'express'
import petController from '../controllers/petcontroller.js'
const router = express.Router()


router.get(
    '/',
    petController.readAll    
)

router.get(
    '/:code',
    petController.readDetail
)

router.post( 
    '/new',
    petController.create
)

router.put(
    '/:code',
    petController.update
)

router.delete(
    '/:code',
    petController.delete
)

/*router.get(
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
    .put(artigosController.actualizarArtigo)*/
    
export default router