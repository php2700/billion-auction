import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from your domain
    port: 5173,
    strictPort: true,
    allowedHosts: ['billionaireauction.com', 'www.billionaireauction.com'],
  },
})
