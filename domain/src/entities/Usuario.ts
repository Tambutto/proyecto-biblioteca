export interface Usuario {
  id: string
  nombre: string
  correo: string
  rol: 'lector' | 'bibliotecario' | 'admin'
}
