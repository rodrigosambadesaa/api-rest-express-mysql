class Artigos {
    constructor() {

    }

    consultarTodos(_, res) {
        res.send('Consultar todos os artigos')
    }

    crearArtigo(_, res) {
        res.send('Crear un artigo')
    }

    verDetalleArtigo(req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Detalle dun artigo',
            cod: id
        })
    }

    actualizarArtigo(req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Actualizar artigo',
            cod: id
        })
    }

    eliminarArtigo(req, res) {
        const id = req.params.codigo
        res.json({
            message: 'Eliminar artigo',
            cod: id
        })
    }


    listar() {

    }

}

export default new Artigos(); // Instancia a classe Artigos