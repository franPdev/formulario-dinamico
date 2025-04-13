# 🧩 Generador Dinámico de Formularios

Este proyecto fue desarrollado como parte de una prueba técnica para Tandem Digital.

Consiste en un generador de formularios dinámicos que construye los campos a partir de un archivo JSON. Se implementó utilizando,
 **Vue 3**, **TypeScript** y **Vuetify** para lograr una experiencia visual limpia y validaciones personalizadas.

---

## 🚀 Tecnologías utilizadas

- [Vue.js 3](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

---

## 🧠 Funcionalidades

- Generación dinámica de campos a partir de un archivo JSON
- Validaciones automáticas según el JSON:
  - Campo requerido (`required`)
  - Longitud mínima y máxima (`minLength`, `maxLength`)
  - Validación por expresiones regulares (`regex`)
- Soporte para campos de texto, número, email y select
- Formulario modularizado en componentes (`Campo.vue`)
- Estilos y estructura visual responsiva con Vuetify
- Visualización de datos del formulario por consola al enviar

---

## 📁 Estructura del proyecto

```
src/
├─ components/
│  ├─ Campo.vue          // Componente reutilizable por tipo de campo
│  └─ Formulario.vue     // Formulario principal
├─ data/
│  └─ config.json        // Configuración dinámica del formulario
├─ types/
│  └─ index.ts           // Definición del tipo de campo
├─ App.vue
└─ main.ts

```

## ⚙️ Instalación y ejecución

1. Cloná el repositorio:

 ```bash
   git clone https://github.com/franPdev/formulario-dinamico.git
   cd formulario-dinamico
   npm install
   npm run dev

```

### 📖 Documentación de diseño

#### Decisiones de diseño

1. **Estructura del JSON**  
   La estructura del archivo `config.json` fue diseñada para ser flexible y escalable. Cada campo incluye propiedades como `name`, `type`, `label` y `validations`, lo que permite generar dinámicamente el formulario y aplicar validaciones específicas sin modificar el código base.

   **Ejemplo de estructura del JSON:**
   ```json
   {
     "formTitle": "Registro de Usuario",
     "fields": [
       {
         "name": "nombre",
         "type": "text",
         "label": "Nombre",
         "validations": [
           { "type": "required", "message": "El nombre es obligatorio" },
           { "type": "minLength", "value": 3, "message": "Debe tener al menos 3 caracteres" }
         ]
       }
     ]
   }
   ```

2. **Validaciones dinámicas**  
   Las validaciones se implementan de forma dinámica en la función `getRules`, que genera reglas basadas en la configuración del JSON. Esto asegura que las validaciones sean consistentes y fáciles de mantener.

---

#### Ejemplos de configuraciones JSON

1. **Configuración básica:**
   ```json
   {
     "formTitle": "Formulario Básico",
     "fields": [
       {
         "name": "email",
         "type": "email",
         "label": "Correo Electrónico",
         "validations": [
           { "type": "required", "message": "El correo es obligatorio" }
         ]
       }
     ]
   }
   ```

2. **Configuración avanzada:**
   ```json
   {
     "formTitle": "Formulario Avanzado",
     "fields": [
       {
         "name": "edad",
         "type": "number",
         "label": "Edad",
         "validations": [
           { "type": "required", "message": "La edad es obligatoria" },
           { "type": "regex", "value": "^[0-9]{1,3}$", "message": "Debe ser un número válido" }
         ]
       }
     ]
   }
   ```

👤 Autor

**Fran Pdev** – [GitHub](https://github.com/franPdev)

📬 Contacto
Podés escribirme si tenés alguna duda o querés más información del proyecto. ¡Gracias por la oportunidad!

