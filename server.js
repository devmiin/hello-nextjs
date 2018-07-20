const next = require('next');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const express = require('express')

// global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

app.prepare()
  .then(() => {
    const server = express()
    
    server.use(handler).listen(3001, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3001')
    });
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1);
  }) 