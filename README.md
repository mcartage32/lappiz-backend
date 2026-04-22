# Lappiz Backend - API de Gestión de Interesados (NestJS + JSON)

## 1. Descripción General

Desarrollo de una API REST para la gestión de interesados en demos de una plataforma LowCode.  
La solución permite registrar y consultar personas interesadas, aplicando buenas prácticas de arquitectura, validación de datos y documentación.

---

## 2. Estructura del Proyecto

```
test/
src/
├── people/
│   ├── people.controller.ts
│   └── people.dto.ts
│   └── people.interface.ts
│   └── people.module.ts
│   ├── people.service.ts
├── data/
│   └── people.json
├── app.module.ts
├── main.ts
```

---

## 3. Consideraciones Generales

- El backend corre por defecto en el puerto **3000**.
- Se utiliza un archivo JSON como mecanismo de persistencia.
- No se requiere base de datos para esta prueba.

---

## 4. Instalación y Ejecución

### Requisitos previos

- Bun 
- Node.js 

---

### Instalación

```
git clone https://github.com/tu-usuario/lappiz-backend.git
cd lappiz-backend
bun install
```

---

### Ejecutar en desarrollo

```
bun run start:dev
```

---

### Alternativa con Node

```
npm install
npm run start:dev
```

---

## 5. Variables de entorno

Crear archivo `.env` en la raíz:

```
PORT=3000
```

---

## 6. Endpoints de la API

Base URL:

http://localhost:3000/api/v1


## 8. Documentación de la API

Swagger disponible en:

http://localhost:3000/api/docs

---

## 9. Persistencia de Datos

Archivo utilizado:

src/data/people.json

Ejemplo:

```
[
  {
    "id": 1,
    "name": "Marcelo",
    "email": "test@email.com",
    "createdAt": "21/4/2026, 15:30:00"
  }
]
```

