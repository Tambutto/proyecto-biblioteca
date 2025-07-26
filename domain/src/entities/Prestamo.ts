import { Libro } from './Libro'
import { Usuario } from './Usuario'

export interface Prestamo {
  id: string
  libro: Libro
  usuario: Usuario
  fechaInicio: Date
  fechaFin: Date | null
  devuelto: boolean
}
