// controllers/licenciaController.js

const licenciaService = require("./../services/LicenciasService") // Ajusta la ruta según tu estructura

// Obtener todas las licencias
const getAllLicencias = async (req, res) => {
    try {
        const licencias = await licenciaService.getLicencias()
        res.status(200).json(licencias)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Obtener licencias por ID del deporte
const getLicenciaByDeporteId = async (req, res) => {
    const { id } = req.params
    try {
        const licencia = await licenciaService.getLicenciaById(id)
        if (!licencia || licencia.length === 0) {
            return res.status(404).json({ message: "No se encontraron licencias para este deporte" })
        }
        res.status(200).json(licencia)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllLicencias,
    getLicenciaByDeporteId
}
