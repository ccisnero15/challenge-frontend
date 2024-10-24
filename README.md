# 🚀 **Challenge Frontend**

¡Bienvenido al proyecto **Challenge Frontend**! 🎉

Este repositorio contiene una aplicación web construida con [Angular](https://angular.dev/). Sigue estos sencillos pasos para configurar y ejecutar el proyecto en tu máquina local.

---

## 📋 **Requisitos Previos**

Antes de empezar, asegúrate de tener instalado lo siguiente en tu equipo:

-   El proyecto fué desarrollado con [Angular CLI] 18.2.1. Tener en cuenta la compatibilidad con node [Versions](https://angular.dev/reference/versions).
-   [Node.js](https://nodejs.org/en/)
-   [Angular CLI](https://angular.io/cli): Puedes instalarlo con:

    ```bash
    npm install -g @angular/cli
    ```

## ⚙️ Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/ccisnero15/challenge-frontend.git
    ```

2. Accede a la carpeta del proyecto:

    ```bash
    cd challenge-frontend
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

## 🚀 Ejecución

Para ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. Inicia el servidor de desarrollo:

    ```bash
    ng serve
    ```

2. Abre tu navegador y accede a `http://localhost:4200/`.

## 🔒 Credenciales de prueba

Role: Admin

-   Email: admin@admin.com
-   Password: 123456
-   Permisos: Read, Write, Delete
-   Puede ver todas las vistas de la plataforma.

Role: User

-   Email: user@user.com
-   Password: 123456
-   Permisos: Read
-   Sólo puede ver la vista de Posts.

## 📝 Estructura del proyecto

-   **Auth**: Carpeta destinada a manejar la autenticación del usuario.
-   **Core**: Carpeta destinada a almacenar servicios, guardianes, interceptores, clases, interfaces y utilidades generales.
-   **Features**: Carpeta destinada a almacenar las vistas y componentes de la aplicación según el modelo de negocio. Estas vistas describen la parte privada de la aplicación, es decir hay que estar autenticado para acceder a ellas.
-   **Shared**: Carpeta destinada a almacenar componentes, servicios, modelos y estado, que tiene que ver con el modelo de negocio y son compartidos en todo el proyecto.
-   **Styles**: Carpeta destinada a almacenar los estilos generales de la aplicación.
