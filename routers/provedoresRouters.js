import express from 'express'
import proveedoresController from '../controllers/ProveedoresController.js'
const router = express.Router()


router.get(
    '/',
    proveedoresController.consultarTodos
)

router.post(
    '/',
    proveedoresController.crearProveedor
)

router.route('/:codigo')
    .get(proveedoresController.verDetalleProveedor)
    .delete(proveedoresController.eliminarProveedor)
    .put(proveedoresController.actualizarProveedor)

export default router