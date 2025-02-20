import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Personal-website',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        blog: 'blog.html' // Explicitly define `blog.html`
      }
    }
  },
  server: {
    open: true,
    strictPort: true, // Ensures consistent port
    historyApiFallback: true, // Ensures deep linking works
  }
});
