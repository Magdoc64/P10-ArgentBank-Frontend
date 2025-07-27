import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/P10-ArgentBank-Frontend/#/',
  plugins: [react()],
})
