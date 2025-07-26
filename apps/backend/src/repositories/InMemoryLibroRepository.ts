

import { Libro } from '../../../../domain/src/entities/Libro'
import { LibroRepository } from '../../../../domain/src/repositories/LibroRepository'

export class InMemoryLibroRepository implements LibroRepository {
  private libros: Libro[] = []

  async agregar(libro: Libro): Promise<void> {
    this.libros.push(libro)
  }

  async buscarPorId(id: string): Promise<Libro | null> {
    return this.libros.find(libro => libro.id === id) || null
  }

  async listarTodos(): Promise<Libro[]> {
    return this.libros
  }
}
