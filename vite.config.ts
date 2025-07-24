import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/cgHtmlUtils.ts'),
      name: 'CgHtmlUtils', // Global variable name for UMD
      formats: ['es', 'umd'],
      fileName: (format) => `cgHtmlUtils.${format === 'es' ? 'esm' : 'umd'}.js`,
    },
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext', // Target modern browsers
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
    }),
  ],
});
