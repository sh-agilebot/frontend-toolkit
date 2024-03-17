import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  footer: ({ format }) => {
    if (format === 'cjs') {
      return {
        js: 'if (module.exports.default) module.exports = module.exports.default;',
      }
    }
  }
});
