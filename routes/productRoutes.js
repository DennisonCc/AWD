const express = require('express');
const router = express.Router();
const productModule = require('../modules/productModule');

// GET /api/products - Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await productModule.getAllProducts();
        res.json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET /api/products/:id - Obtener producto por ID
router.get('/:id', async (req, res) => {
    try {
        const product = await productModule.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Producto no encontrado'
            });
        }
        res.json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// POST /api/products - Crear nuevo producto
router.post('/', async (req, res) => {
    try {
        const newProduct = await productModule.createProduct(req.body);
        res.status(201).json({
            success: true,
            data: newProduct,
            message: 'Producto creado exitosamente'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// PUT /api/products/:id - Actualizar producto
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await productModule.updateProduct(req.params.id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: 'Producto no encontrado'
            });
        }
        res.json({
            success: true,
            data: updatedProduct,
            message: 'Producto actualizado exitosamente'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// DELETE /api/products/:id - Eliminar producto
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await productModule.deleteProduct(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'Producto no encontrado'
            });
        }
        res.json({
            success: true,
            message: 'Producto eliminado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
