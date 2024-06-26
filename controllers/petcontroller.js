import { DB } from '../connect.js'

class PetController {

    readAll(_, res) {
        try {
            DB.query('SELECT * FROM pets', (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'Erro ao consultar pets',
                        err
                    })
                } else {
                    if (result && result.length > 0) {
                        res.status(201).json({
                            message: 'Pets consultados con éxito',
                            data: result
                        })
                    } else {
                        res.status(400).json({
                            message: 'Pets no encontrados'
                        })
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    readDetail(req, res) {
        const { code } = req.params
        try {
            DB.query(
                'SELECT * FROM pets WHERE id = ?',
                [code],
                (err, result) => {
                    if (err) {
                        console.log(err)
                        res.status(500).json({
                            message: 'Erro ao consultar pet',
                            err
                        })
                    }
                    else if (result && result.length > 0) {

                        res.status(201).json({
                            message: 'Pet consultado con éxito',
                            data: result

                        })
                    }
                    else {
                        res.status(400).json({
                            message: 'Pet no encontrado',

                        })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    create(req, res) {
        const { name, species, age, owner } = req.body
        try {
            DB.query('INSERT INTO pets (name, species, age, owner) VALUES (?, ?, ?, ?)', [name, species, age, owner], (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'Erro ao crear pet',
                        err
                    })
                } else {
                    if (result) {
                        res.status(201).json({
                            message: 'Pet creado con éxito',
                            data: result
                        })
                    }
                    return res.status(401).json({
                        message: 'No se pudo crear el pet'
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    update(req, res) {
        const { code } = req.params
        const { name, species, age, owner } = req.body
        try {
            DB.query('UPDATE pets SET name = ?, species = ?, age = ?, owner = ? WHERE id = ?', [name, species, age, owner, code], (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'Erro ao actualizar pet',
                        err
                    })
                } else if (result && result.affectedRows > 0) {
                    res.status(201).json({
                        message: 'Pet actualizado con éxito',
                        data: result
                    })
                } else {
                    res.status(401).json({
                        message: 'No se pudo actualizar el pet'
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    delete(req, res) {
        const { code } = req.params
        try {
            DB.query('DELETE FROM pets WHERE id = ?', [code], (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'Erro ao eliminar pet',
                        err
                    })
                } else if (result && result.affectedRows > 0) {
                    res.status(201).json({
                        message: 'Pet eliminado con éxito',
                        data: result
                    })
                } else {
                    res.status(401).json({
                        message: 'No se pudo eliminar el pet'
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default new PetController()