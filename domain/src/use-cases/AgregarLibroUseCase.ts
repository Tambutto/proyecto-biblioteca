
import { Libro } from '../entities/Libro'
import { LibroRepository } from '../repositories/LibroRepository'

export class AgregarLibroUseCase {
  constructor(private repo: LibroRepository) {}

  async ejecutar(libro: Libro): Promise<void> {
    await this.repo.agregar(libro)
  }
}
