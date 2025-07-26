import { Request, Response } from 'express'
import { AgregarLibroUseCase } from '../../../domain/src/use-cases/AgregarLibroUseCase'
import { InMemoryLibroRepository } from '../../backend/src/repositories/InMemoryLibroRepository'

const repo = new InMemoryLibroRepository()
const useCase = new AgregarLibroUseCase(repo)

export class LibroController {
  async agregarLibro(req: Request, res: Response) {
    const libro = req.body
    await useCase.ejecutar(libro)
    res.status(201).send('Libro agregado')
  }

  async listarLibros(req: Request, res: Response) {
    const libros = await repo.listarTodos()
    res.json(libros)
  }
}
