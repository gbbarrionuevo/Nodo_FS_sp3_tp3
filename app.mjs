import express from 'express';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares para parsear JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Soporte para métodos HTTP como PUT y DELETE desde formularios
app.use(methodOverride('_method'));

// Archivos estáticos
app.use(express.static('public'));

// Motor de vistas
app.set('view engine', 'ejs');

// Conexión a MongoDB
connectDB();

// Obtengo método y URL
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Configuración de rutas
app.use('/api', superHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ mensaje: 'Ruta no encontrada' });
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});