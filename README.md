# Proyecto Final Node.js

Este proyecto es una API REST para administrar empleados con autenticación por JWT.

## Tecnologías
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt

## Rutas principales

### Auth
- `POST /api/auth/register` - Crea un nuevo usuario
- `POST /api/auth/login` - Inicia sesión y devuelve un token

### Employees (protegidas con token JWT)
- `GET /api/employees` - Ver todos los empleados
- `POST /api/employees` - Crear un nuevo empleado
- `PUT /api/employees/:id` - Editar empleado
- `DELETE /api/employees/:id` - Eliminar empleado
- `GET /api/employees/search?name=Juan` - Buscar por nombre

## Cómo ejecutar
```bash
npm install
npm run dev
```

## Subir a GitHub
1. Crear repo en GitHub.
2. Ejecutar:
```bash
git init
git remote add origin TU_REPO_URL
git add .
git commit -m "Proyecto final Node.js"
git push -u origin master
```