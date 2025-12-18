import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React1_G56_Estado-de-los-componentes-y-eventos/', // <-- ESTO ES CLAVE
})
