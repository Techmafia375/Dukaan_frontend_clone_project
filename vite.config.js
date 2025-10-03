import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fluid, { extract } from 'fluid-tailwind'


// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "ui-sans-serif", "system-ui"], 
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(
      {
        colors:{
          blue:{
            700:  "#2596be"
          }
        }
      }
    ),
    fluid

  ],
})
