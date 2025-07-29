import express from 'express'
import libroRoutes from '../src/routes/libroRoutes'

const app = express()
app.use(express.json())
app.use('/libros', libroRoutes)

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000')
})
