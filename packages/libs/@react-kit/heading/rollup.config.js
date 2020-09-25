import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import linaria from 'linaria/rollup';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        declaration: true,
        declarationDir: 'dist',
        rootDir: 'src',
      }),
      // terser(),
    ],
  },
  {
    input: 'src/index.tsx',
    output: [
      {
        dir: 'dist/es',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        declaration: false,
        rootDir: 'src',
      }),
      linaria({
        sourceMap: process.env.NODE_ENV !== 'production',
      }),
      // terser(),
    ],
  },
];
