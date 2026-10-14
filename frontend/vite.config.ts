import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Content JSON lives one level up, in ../content
  server: { fs: { allow: ['.', '../content'] } },
})
