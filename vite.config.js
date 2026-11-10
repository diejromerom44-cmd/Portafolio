import { defineConfig } from 'vite';
import { minify } from 'html-minifier-terser';

const minificarHtml = () => ({
  name: 'minificar-html',
  apply: 'build',
  transformIndexHtml: (html) =>
    minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    })
});

export default defineConfig({
  base: './',
  plugins: [minificarHtml()],
  build: {
    outDir: 'dist',
    minify: true,
    cssMinify: true
  }
});
