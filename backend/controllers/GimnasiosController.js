// controllers/gimnasioController.js

const gimnasioService = require("./../services/GimnasioService") 

// Obtener todos los gimnasios
const getAllGimnasios = async (req, res) => {
    try {
        const gimnasios = await gimnasioService.getGimnasios()
        res.status(200).json(gimnasios)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Obtener un gimnasio por ID
const getGimnasioById = async (req, res) => {
    const { id } = req.params
    try {
        const gimnasio = await gimnasioService.getGimnasioById(id)
        if (!gimnasio) {
            return res.status(404).json({ message: "Gimnasio no encontrado" })
        }
        res.status(200).json(gimnasio)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Crear un nuevo gimnasio
const createGimnasio = async (req, res) => {
    // Aquí podrías validar que el usuario tenga rol de "entrenador"
    const gimnasioData = req.body
    try {
        const nuevoGimnasio = await gimnasioService.crearGimnasio(gimnasioData)
        res.status(201).json(nuevoGimnasio)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Actualizar un gimnasio
const updateGimnasio = async (req, res) => {
    const { id } = req.params
    const gimnasioData = req.body
    try {
        const gimnasioActualizado = await gimnasioService.actualizarGimnasio(id, gimnasioData)
        res.status(200).json(gimnasioActualizado)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Borrar un gimnasio
const deleteGimnasio = async (req, res) => {
    const { id } = req.params
    try {
        await gimnasioService.borrarGimnasio(id)
        res.status(200).json({ message: "Gimnasio eliminado correctamente" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllGimnasios,
    getGimnasioById,
    createGimnasio,
    updateGimnasio,
    deleteGimnasio
}
