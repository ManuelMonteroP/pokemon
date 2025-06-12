# Pokedex

Aplicación construida con Vue 3 + Vite que permite explorar una lista de Pokémon, marcar favoritos, buscar por nombre y ver los detalles de cada uno.

---

## Tecnologías utilizadas

- **Vue 3 + Composition API** — Por su simplicidad, reactividad mejorada y separación lógica clara en componentes y composables (`useHomeView`).
- **TypeScript** — Aporta tipado fuerte y mejora la experiencia de desarrollo al prevenir errores comunes.
- **Vite** — Elegido como bundler por su velocidad en desarrollo y build.
- **Pinia** — Store oficial de Vue 3, utilizada para manejar el estado global como la lista de favoritos.
- **Vitest + Vue Test Utils** — Para testear componentes de manera unitaria con rapidez y bajo acoplamiento.
- **ESLint + Prettier** — Aseguran consistencia en el código y cumplimiento de convenciones.

---

## Decisiones técnicas y enfoque

- La aplicación fue pensada como si fuera a escalar, por eso implemente:
  - **Paginación**: Se implementó carga incremental (`loadMorePokemons`) para evitar grandes volúmenes de datos en memoria.
  - **Debounce en búsqueda**: Para prevenir múltiples llamadas al API al escribir rápido.
  - **Composables**: La lógica de la vista (`useHomeView`) se separó del componente `HomeView.vue` para facilitar futuras pruebas, mantenimiento y reutilización.
  - **Manejo de estado global con Pinia**: Almaceno los favoritos.
  - **Componentes reutilizables**: Como `BaseInput`, `BaseButton`, etc., para fomentar la escalabilidad de la UI.

---

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### DEMO with [Vercel](https://pokemon-khaki-five.vercel.app/)

```sh
https://pokemon-khaki-five.vercel.app/
```
