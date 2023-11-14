import { defineConfig } from 'tsup';


export default defineConfig(options => ({
  target: 'node18',
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: !options.watch,
  outDir: "build",
}));
