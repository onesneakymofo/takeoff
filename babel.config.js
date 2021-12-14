module.exports = {
  presets: [
    "@emotion/babel-preset-css-prop",
    "@babel/preset-react",
    "@babel/preset-env",
    "@babel/preset-flow"
  ],
  plugins: [
    '@emotion/babel-plugin',
    'babel-plugin-twin',
    'babel-plugin-macros',
    [
      "@babel/plugin-proposal-private-methods", { "loose": true }
    ],
    [
      "@babel/plugin-proposal-private-property-in-object", { "loose": true }
    ],
    [
      "@babel/plugin-proposal-class-properties", { "loose": true }
    ]
  ]
};
