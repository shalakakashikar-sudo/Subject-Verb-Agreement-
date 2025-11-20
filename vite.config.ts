import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CHANGE THIS LINE:
  base: '/Subject-Verb-Agreement', 
  server: {
    port: 3000,
    open: true
  }
})