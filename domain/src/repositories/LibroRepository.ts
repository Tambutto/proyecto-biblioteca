// LibroRepository.ts
import { Libro } from '../entities/Libro'
export interface LibroRepository {
  agregar(libro: Libro): Promise<void>
  buscarPorId(id: string): Promise<Libro | null>
  listarTodos(): Promise<Libro[]>
}
