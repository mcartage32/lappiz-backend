# Lappiz Backend - API de Gestión de Interesados (NestJS + JSON)

## 1. Descripción General

Desarrollo de una API REST para la gestión de interesados en demos de una plataforma LowCode.  
La solución permite registrar y consultar personas interesadas, aplicando buenas prácticas de arquitectura, validación de datos y documentación.

---

## 2. Arquitectura del Proyecto

El backend está construido utilizando NestJS, siguiendo una arquitectura modular basada en separación de responsabilidades.

### Diagrama de Arquitectura

```
+--------------------------------------------------+
|                 CLIENTE (Frontend)               |
+-------------------------+------------------------+
                          |
                          v
+--------------------------------------------------+
|                 API (NestJS)                     |
|  +-------------------+   +---------------------+ |
|  |   Controllers     |   |      Services       | |
|  | (Endpoints REST)  |-->| (Lógica negocio)    | |
|  +-------------------+   +---------------------+ |
|                          |
|                          v
|                +------------------+              |
|                |  JSON Storage    |              |
|                | (people.json)    |              |
|                +------------------+              |
+--------------------------------------------------+
```

---

## 3. Estructura del Proyecto

```
src/
├── main.ts
├── app.module.ts
├── people/
│   ├── dto/
│   │   ├── create-person.dto.ts
│   │   └── person-response.dto.ts
│   ├── interfaces/
│   │   └── person.interface.ts
│   ├── people.controller.ts
│   ├── people.service.ts
│   └── people.module.ts
├── data/
│   └── people.json
```

---

## 4. Consideraciones Generales

- El backend corre por defecto en el puerto **8000**.
- Se utiliza un archivo JSON como mecanismo de persistencia.
- No se requiere base de datos para esta prueba.

---

## 5. Instalación y Ejecución

### Requisitos previos

- Bun (recomendado)
- Node.js (opcional)

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

## 6. Variables de entorno

Crear archivo `.env` en la raíz:

```
PORT=8000
FRONTEND_URL=http://localhost:3000
```

---

## 7. Endpoints de la API

Base URL:

http://localhost:8000/api/v1

### Obtener personas

GET /people

---

### Crear persona

POST /people

Body:

```
{
  "name": "Marcelo",
  "email": "marcelo@email.com"
}
```

---

## 8. Documentación de la API

Swagger disponible en:

http://localhost:8000/api/docs

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

---

## 10. Decisiones Técnicas

### Uso de NestJS

- Arquitectura modular
- Escalable
- Inyección de dependencias

### Uso de JSON como persistencia

- Simple para pruebas
- No requiere configuración externa

### Uso de DTOs

- Separación entre entrada y modelo
- Mejor control de datos

### Validaciones

- Uso de class-validator
- Previene datos inválidos

### Manejo de errores

```
{
  "message": "Email already exists",
  "error": "Bad Request",
  "statusCode": 400
}
```

### Uso de Bun

- Instalaciones más rápidas
- Mejor rendimiento

---

## 11. Manejo de CORS

```
app.enableCors({
  origin: process.env.FRONTEND_URL,
});
```

---

## 12. Supuestos

- No hay autenticación
- Bajo volumen de datos
- No hay concurrencia

---

## 13. Notas adicionales

```
git update-index --assume-unchanged src/data/people.json
```

---

# Estado del proyecto

- API REST funcional
- Validaciones
- Manejo de errores
- Persistencia en JSON
- Documentación Swagger
