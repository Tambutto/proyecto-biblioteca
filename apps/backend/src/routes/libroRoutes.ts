import express from 'express'
import { LibroController } from '../../backend/src/LibroController'

const router = express.Router()
const libroController = new LibroController()

router.post('/', libroController.agregarLibro)
router.get('/', libroController.listarLibros)

export default router


