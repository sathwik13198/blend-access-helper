import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Separate config for building embeddable widget
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/embed.ts'),
      name: 'SkillblendA11y',
      fileName: 'widget',
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        // Ensure CSS is inlined
        inlineDynamicImports: true,
      }
    },
    outDir: 'dist-embed',
    emptyOutDir: true,
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
})