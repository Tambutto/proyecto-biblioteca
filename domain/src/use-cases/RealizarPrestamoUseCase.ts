import { Prestamo } from '../entities/Prestamo'

export class RealizarPrestamo {
  constructor(private prestamoRepo: any) {}

  async ejecutar(prestamo: Prestamo): Promise<void> {
    // validaciones
    await this.prestamoRepo.guardar(prestamo)
  }
}
