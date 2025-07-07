const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 🔗 AQUÍ DEBES PONER TU LINK DE MONGODB ATLAS EN EL ARCHIVO .env
// Ejemplo: MONGODB_URI=mongodb+srv://tu_usuario:tu_contraseña@tu_cluster.mongodb.net/tu_base_datos?retryWrites=true&w=majority

// Conectar a MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error('Error conectando a MongoDB:', error.message);
        process.exit(1);
    }
};

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Usar las rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Ruta básica
app.get('/', (req, res) => {
    res.json({ 
        message: 'API funcionando correctamente',
        version: '1.0.0',
        endpoints: [
            '/api/users',
            '/api/products'
        ]
    });
});

// Manejo de errores 404
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Endpoint no encontrado',
        message: `La ruta ${req.originalUrl} no existe`
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Visita: http://localhost:${PORT}`);
});

module.exports = app;
