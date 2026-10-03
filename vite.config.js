import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' keeps every asset path relative, so the built site works from
// any folder on any static host (cPanel, Netlify, GitHub Pages, S3...).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
