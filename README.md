# 🎵 Soundwave

Soundwave es una plataforma web moderna para amantes de la música, desarrollada con **React** y **Tailwind CSS v4**. El proyecto destaca por una arquitectura escalable basada en **Atomic Design** y un sistema de validación de formularios robusto. 🎧

## 🚀 Guía de Inicio Rápido

Para replicar este entorno de desarrollo desde cero, se deben seguir ños siguientes pasos:

1.  **Inicialización del proyecto:**
    ```bash
    npm create vite@latest
    (escoger react y javascript)
    ```
2.  **Instalación de dependencias clave:**
    * **Navegación:** `npm install react-router-dom` para gestionar las rutas de la aplicación. 🗺️
    * **Estilos:** `npm install tailwindcss @tailwindcss/vite` para la nueva versión de Tailwind. 🎨
3.  **Configuración técnica:**
    * Integración del plugin `@tailwindcss/vite` en el archivo `vite.config.js`.
    * Importación de Tailwind en el archivo CSS principal: `@import "tailwindcss";`.

## 🏗️ Arquitectura: Atomic Design

La organización del código sigue los principios de **Atomic Design**, lo que facilita el mantenimiento y la reutilización de componentes. Esta metodología se aplicó con especial detalle en:

* **Átomos:** Componentes básicos como el `InputField.jsx`, que gestiona sus propios estados de foco y error. ⚛️
* **Organismos:** El formulario `Phorm.jsx`, que agrupa múltiples átomos para crear una unidad funcional completa. 🧬

## 🧠 Desafíos Técnicos y Aprendizaje

El mayor reto de este proyecto fue el desarrollo del **Formulario de Registro y su Lógica de Validación**. 🛠️ 

Se implementó un sistema que:
* Valida los datos del usuario en tiempo real mediante patrones definidos en `PhormRules.jsx`.
* Gestiona estados complejos de UI para mostrar mensajes de error dinámicos.
* Utiliza los nuevos estados de interacción de Tailwind v4 (`hover`, `focus`) para mejorar la experiencia del usuario (UX).

## 📁 Estructura de Carpetas

```text
src/
├── assets/             # Recursos estáticos
├── components/
│   ├── atoms/          # Componentes indivisibles (Inputs, Reglas)
│   ├── organism/       # Componentes complejos (Formulario), navbar, footer
├── pages/              # Vistas: Home, Login, Discover
├── router/             # Configuración de React Router
└── index.css           # Configuración de Tailwind y variables @theme

***

