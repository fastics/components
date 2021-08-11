module.exports = {
  plugins: ['transform-scss'],
  presets: [
    ['@babel/env', { modules: false, useBuiltIns: 'usage', corejs: '3.16' }],
    '@babel/react',
    '@babel/typescript',
  ],
  env: {
    cjs: {
      presets: [
        ['@babel/env', { targets: { node: 6 }, useBuiltIns: 'usage', corejs: '3.16' }],
        '@babel/react',
        '@babel/typescript',
      ],
    },
  },
  ignore: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.ts', '**/*.stories.tsx'],
};
