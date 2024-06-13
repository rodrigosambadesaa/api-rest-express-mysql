import e from 'express'
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
            console.log(error)
        }
    }

    crearProveedor(req, res) {
        const { id, nombre } = req.body 
        try {
            DB.query(`INSERT INTO provedores (prv_id, prv_nome) VALUES (${id}, '${nombre}')`)
                , (err, result) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({
                            message: 'Erro ao crear provedor'
                        })
                    }

                 
                        return res.status(201).json({
                            message: 'Provedor creado con éxito',
                            result
                        })
                    
                   

                }

        } catch (error) {
            console.log(error)
        }
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