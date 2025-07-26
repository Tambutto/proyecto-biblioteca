// LibroRepository.ts
import { Prestamo } from '../entities/Prestamo'
export interface PrestamoRepository {
  agregar(prestamo: Prestamo): Promise<void>
  buscarPorId(id: string): Promise<Prestamo| null>
  listarTodos(): Promise<Prestamo[]>
}
