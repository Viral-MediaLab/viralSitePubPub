require('babel-core/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  port: process.env.PORT,
  apiPort: process.env.APIPORT,
  app: {
    title: 'Viral Communications',
    description: 'MIT Media Lab - Viral Communications',
    meta: {
      charSet: 'utf-8',
    }
  }
}, environment);
