import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),      // Needed for React JSX
    tailwindcss() // Needed for Tailwind CSS classes
  ],
})
