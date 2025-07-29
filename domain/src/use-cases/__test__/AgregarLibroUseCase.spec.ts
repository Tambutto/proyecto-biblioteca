import { AgregarLibroUseCase } from '../AgregarLibroUseCase'
import { Libro } from '../../entities/Libro'
import { describe, it, expect, vi } from 'vitest'
import { LibroRepository } from '../../repositories/LibroRepository'

// Mock del repositorio
const mockRepositorio: LibroRepository = {
  agregar: async (Libro: Libro): Promise<void> => { /* implementación vacía */ },
  buscarPorId: async (id: string): Promise<Libro | null> => { return null/* implementación vacía */ },
  listarTodos: async (): Promise<Libro[]>=> { return [] }
}

describe('AgregarLibroUseCase', () => {
  it('debería agregar un libro correctamente', async () => {
    const mockRepo = {
      agregar: vi.fn(),
      buscarPorId: vi.fn(async (id) => null),
      listarTodos: vi.fn(async () => [])
    }

    const useCase = new AgregarLibroUseCase(mockRepo)
    const libro: Libro = {
      id: '1',
      titulo: 'Clean Architecture',
      autor: 'Robert C. Martin',
      anio: 2017,
      disponible: true,
    }

    await useCase.ejecutar(libro)

    expect(mockRepo.agregar).toHaveBeenCalledWith(libro)
    expect(mockRepo.agregar).toHaveBeenCalledTimes(1)
  })
})
