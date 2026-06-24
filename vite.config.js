import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/un-chambers-status/',   // ← must match your GitHub repo name
})
