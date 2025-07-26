
import { Usuario } from '../entities/Usuario'

export interface UsuarioRepository {
  agregar(usuario: Usuario): Promise<void>
  buscarPorId(id: string): Promise<Usuario | null>
  listarTodos(): Promise<Usuario[]>
}

