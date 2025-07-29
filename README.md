# mi-proyecto

Aplicación de gestión de libros construida con Node.js, Express y TypeScript. Sigue principios de Clean Architecture y utiliza TDD para asegurar calidad en el desarrollo.

## Instalación

Asegurate de tener `yarn` instalado.

```bash
yarn install


---

### 3. 🚀 Inicio de la aplicación

```markdown
## Cómo iniciar la app

Usá el siguiente comando para levantar el servidor:

```bash
yarn start

### O ejecutá directamente el archivo principal usando ts-node:

ts-node apps/backend/src/index.ts



---

### 4. 🧱 Explicación breve de arquitectura

```markdown
## Arquitectura

### El proyecto sigue Clean Architecture:

- **controllers/**: reciben las solicitudes HTTP.
- **use-cases/**: contiene la lógica de negocio.
- **repositories/**: abstrae el acceso a datos (implementación en memoria).
- **domain/**: define entidades y casos de uso.

Esto permite separar responsabilidades, escalar con facilidad y facilitar tests.


### Reflexión sobre TDD y Clean Architecture

## Reflexión

Aplicar TDD me permitió escribir código más seguro, con menos bugs, y tomar decisiones de diseño más pensadas. Clean Architecture me ayudó a separar responsabilidades y pensar desde el dominio hacia afuera. Fue desafiante al principio, pero ahora el código se siente mucho más mantenible.
