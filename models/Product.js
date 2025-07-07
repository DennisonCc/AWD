const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        trim: true,
        maxlength: [100, 'El nombre no puede exceder 100 caracteres']
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [0.01, 'El precio debe ser mayor a 0']
    },
    category: {
        type: String,
        required: [true, 'La categoría es obligatoria'],
        trim: true,
        enum: {
            values: ['Electrónicos', 'Ropa', 'Hogar', 'Deportes', 'Libros', 'Accesorios', 'Otros'],
            message: 'Categoría no válida'
        }
    },
    stock: {
        type: Number,
        required: [true, 'El stock es obligatorio'],
        min: [0, 'El stock no puede ser negativo'],
        default: 0
    },
    description: {
        type: String,
        maxlength: [500, 'La descripción no puede exceder 500 caracteres']
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Product', productSchema);
