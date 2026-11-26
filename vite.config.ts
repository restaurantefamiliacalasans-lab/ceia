import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// base './' = caminhos relativos: funciona em github.io/<repo>/, em domínio próprio e localmente.
export default defineConfig({ base: './', plugins: [react()] });
