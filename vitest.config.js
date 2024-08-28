import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,  // Asegúrate de que esta opción esté habilitada para que puedas usar `test`, `expect`, etc.
    setupFiles: ['./src/setupTests.js'],  // Ajusta la ruta si es necesario
    environment: 'jsdom',  // Asegúrate de que el entorno sea jsdom
  },
});
