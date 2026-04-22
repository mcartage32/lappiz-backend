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
│   ├── people.dto.ts
│   ├── people.interface.ts
│   ├── people.module.ts
│   └── people.service.ts
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

### Instalación paso a paso

1) Clonar el repositorio

```
git clone https://github.com/tu-usuario/lappiz-backend.git
```

2) Ingresar al proyecto
```
cd lappiz-backend
```
3) Crear archivo `.env` en la raíz del proyecto (basarse en el archivo .env.example)
```
PORT=3000
```
4) (Opcional) Evitar versionar cambios en el archivo JSON
```
git update-index --assume-unchanged src/data/people.json
```
#### Nota: El comando anterior permite usar el archivo como una “base de datos local”, evitando que los cambios generados durante pruebas se suban al repositorio.


5) Instalar dependencias
```
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

### Obtener personas

GET /get-people

### Crear persona

POST /add-person


## 7. Documentación de la API

Swagger disponible en:

http://localhost:3000/api/docs

---

## 8. Persistencia de Datos

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

## 9. Ejecución con Docker

Para ejecutar la aplicación usando Docker, sigue los siguientes pasos:

### 1) Construir la imagen
```
docker build -t lappiz-backend .
```
### 2) Ejecutar el contenedor
```
docker run -p 3000:3000 --name lappiz-backend lappiz-backend
```
La API estará disponible en:
http://localhost:3000/api/v1
