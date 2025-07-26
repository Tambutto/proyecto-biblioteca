import { Libro } from '../entities/Libro'

export class ValidacionPrestamoService {
  static libroDisponible(libro: Libro): boolean {
    return libro.disponible
  }
}
