import { describe, it, expect, vi } from 'vitest'
import { RealizarPrestamo } from '../RealizarPrestamoUseCase'
import { Prestamo } from '../../entities/Prestamo'
import { Libro } from '../../entities/Libro'
import { Usuario } from '../../entities/Usuario'

describe('RealizarPrestamo', () => {
  it('debería guardar un préstamo con todos sus datos correctamente', async () => {
    const mockGuardar = vi.fn()
    const mockRepo = { guardar: mockGuardar }

    const useCase = new RealizarPrestamo(mockRepo)

    const libro: Libro = {
      id: 'lib001',
      titulo: 'El Programador Pragmático',
      autor: 'Andy Hunt',
      anio: 1999,
      disponible: true
    }

    const usuario: Usuario = {
      id: 'usr123',
      nombre: 'Sandro Tambutto',
      correo: 'sandro@example.com',
      rol: 'lector'
    }

    const prestamo: Prestamo = {
      id: 'p001',
      libro,
      usuario,
      fechaInicio: new Date('2025-07-29'),
      fechaFin: null,
      devuelto: false
    }

    await useCase.ejecutar(prestamo)

    expect(mockGuardar).toHaveBeenCalledWith(prestamo)
    expect(mockGuardar).toHaveBeenCalledTimes(1)
  })
})
