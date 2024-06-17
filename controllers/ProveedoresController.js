import { DB } from '../connect.js'

class ProveedoresController {

    consultarTodos(_, res) {
        try {
            DB.query('SELECT * FROM provedores', (err, result) => {
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
                })
        } catch (error) {
            console.log(error)
        }
    }

    crearProveedor(req, res) {
        const { nombre } = req.body
        console.log(nombre)
        try {
            DB.query(
                `INSERT INTO provedores (prv_id, prv_nome) VALUES (NULL, ?)`,
                [nombre],
                (err, result) => {
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



                });

        } catch (error) {
            res.json(error)
        }
    }

    verDetalleProveedor(req, res) {
        try {
            DB.query('SELECT * FROM provedores WHERE prv_id = ?', [req.params.codigo], (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'Erro ao consultar provedor'
                    })
                } else {
                    if (result) {
                        res.status(201).json({
                            message: 'Provedor consultado con éxito',
                            result
                        })
                    }
                    return res.status(401).json({
                        message: 'Ningún provedor encontrado'
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    actualizarProveedor(req, res) {
        const { codigo } = req.params
        const { nombre } = req.body
        try {
            DB.query('UPDATE provedores SET prv_nome = ? WHERE prv_id = ?', [nombre, codigo], (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'Erro ao actualizar provedor'
                    })
                } else {
                    if (result.affectedRows > 0) {
                        res.status(201).json({
                            message: 'Provedor actualizado con éxito',
                            result
                        })
                    }
                    return res.status(401).json({
                        message: 'Ningún provedor actualizado'
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    eliminarProveedor(req, res) {
        const { codigo } = req.params
        try {
            DB.query('DELETE FROM provedores WHERE prv_id = ?', [codigo], (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'Erro ao eliminar provedor'
                    })
                } else {
                    if (result.affectedRows > 0) {
                        res.status(201).json({
                            message: 'Provedor eliminado con éxito',
                            result
                        })
                    }
                    return res.status(401).json({
                        message: 'Ningún provedor eliminado'
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

/* function pasarDatos({nombre = 'Sin nombre', apellido = '', edad = 0, estatura = 0}) {
    console.log(nombre, apellido, edad, estatura)
}

pasarDatos({nombre: 'Juan', apellido: 'Perez', edad: 25, estatura: 1.75}) */

export default new ProveedoresController(); // Instancia a classe ProveedoresController