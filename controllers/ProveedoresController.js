import { DB } from '../connect.js'

class ProveedoresController {
  


    consultarTodos(_, res) {
        try {
            DB.query('SELECT * FROM provedores')
                , (err, result) => {
                    if (err) {
                        console.log(err)
                        res.status(500).json({
                            message: 'Erro ao consultar provedores'
                        })
                    } else {
                        if (result) {
                            res.status(201).json({
                                message: 'Provedores consultados con éxito',
                                result
                            })
                        }
                        return res.status(401).json({
                            message: 'Ningún provedor encontrado'
                        })
                    }
                }
        } catch (error) {

        }
    }

    crearProveedor(_, res) {
        res.send('Crear un provedor')
    }

    verDetalleProveedor(req, res) {
        const { codigo } = req.params
        res.json({
            message: 'Ver detalle provedor',
            codigo
        })
    }

    actualizarProveedor(req, res) {
        const { codigo } = req.params
        res.json({
            message: 'Actualizar provedor',
            codigo
        })
    }

    eliminarProveedor(req, res) {
        const { codigo } = req.params
        res.json({
            message: 'Eliminar provedor',
            codigo
        })
    }
}

/* function pasarDatos({nombre = 'Sin nombre', apellido = '', edad = 0, estatura = 0}) {
    console.log(nombre, apellido, edad, estatura)
}

pasarDatos({nombre: 'Juan', apellido: 'Perez', edad: 25, estatura: 1.75}) */

export default new ProveedoresController(); // Instancia a classe ProveedoresController