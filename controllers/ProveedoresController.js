class ProveedoresController {
    constructor() {

    }

    consultarTodos(_, res) {
        res.send('Listar todos os provedores')
    }

    crearProveedor(_, res) {
        res.send('Crear un provedor')
    }

    verDetalleProveedor(req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Detalle dun provedor',
            cod: id
        })
    }

    actualizarProveedor(req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Actualizar provedor',
            cod: id
        })
    }

    eliminarProveedor(req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Eliminar provedor',
            cod: id
        })
    }
}

export default new ProveedoresController(); // Instancia a classe ProveedoresController