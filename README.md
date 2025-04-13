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

```txt
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

👤 Autor

**Fran Pdev** – [GitHub](https://github.com/franPdev)

📬 Contacto
Podés escribirme si tenés alguna duda o querés más información del proyecto. ¡Gracias por la oportunidad!

