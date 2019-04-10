const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  presets: [
    '@babel/env',
    [
      '@babel/preset-react',
      {
        development: !isProduction,
      },
    ],
  ],
  plugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            { removeScriptElement: true },
            /* Remove unused attrs produced by the editing software. `removeAttrs` syntax: https://goo.gl/YLuuEU */
            {
              removeAttrs: {
                attrs: ['serif.id', 'xmlns.serif', 'data.name'],
              },
            },
          ],
        },
      },
    ],
  ],
}
