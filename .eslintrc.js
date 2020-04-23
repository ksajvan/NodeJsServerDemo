module.exports = {
  env: {
    "node": true,
    "mocha": true
  },
  rules:{
    "linebreak-style": 0   // <----------
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
  },
};
