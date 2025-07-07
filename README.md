# API con Express, Node.js y MongoDB Atlas

## Estructura del proyecto

```
AWD/
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
├── modules/
│   ├── userModule.js
│   └── productModule.js
├── models/
│   ├── User.js
│   └── Product.js
├── config/
│   └── database.js
├── index.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
   - Copia `.env.example` a `.env`
   - Reemplaza las variables con tus valores reales

4. Ejecutar el servidor:
```bash
npm start
```

Para desarrollo con recarga automática:
```bash
npm run dev
```

## 🚀 Deployment en Render

### Variables de entorno en Render:
En el panel de Render, configura estas variables:

- `MONGODB_URI`: Tu string de conexión de MongoDB Atlas
- `NODE_ENV`: production

### Pasos para deployment:
1. Sube tu código a GitHub (el `.env` se ignora automáticamente)
2. Conecta tu repositorio de GitHub con Render
3. Configura las variables de entorno en el panel de Render
4. Deploy automático

## MongoDB Atlas Setup
1. Crea un cluster en MongoDB Atlas
2. Configura las credenciales de acceso
3. Obtén tu connection string
4. Reemplaza en las variables de entorno

## Endpoints disponibles

### Usuarios
- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener usuario por ID
- `POST /api/users` - Crear nuevo usuario
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

### Productos
- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener producto por ID
- `POST /api/products` - Crear nuevo producto
- `PUT /api/products/:id` - Actualizar producto
- `DELETE /api/products/:id` - Eliminar producto

## Ejemplos de uso

### Crear usuario
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana Martín","email":"ana@example.com","age":28}'
```

### Crear producto
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Monitor 24\"","price":300,"category":"Electrónicos","stock":15}'
```

El servidor corre en `http://localhost:3000`
