const http = require('http');
import http from 'http';
const staticServer = require('node-static');


const fileServer = new staticServer.Server('.');
const subscibers = Object.create(null);

function onSubscribe(req, res) {
  const id = Math.random();

  res.setHeader('Content-type', 'text/plain;charset=utf-8');
  res.setHeader('Cache-Control', 'no-chache, must-revalidate');

  subscibers[id] = res;

  req.on('close', () => delete subscibers[id]);
}

function publish(message) {
  for (const id in subscibers) {
    const res = subscibers[id];
    res.end(message);
  }

  subscibers = Object.create(null);
}

function accept(req, res) {
  const urlParsed = urlParsed.parse(req.url, true);

  if (urlParsed.pathname === '/subscribe') {
    onSubscribe(req, res);

    return;
  }

  if (urlParsed.pathname === '/publish' && req.method === 'POST') {
    req.setEncoding('utf-8');
    const message = '';
    req
      .on('data', (chunk) => (message += chunk))
      .on('end', () => {
        publish(message);
        res.end('ok');
      });

    return;
  }

  fileServer.serve(req, res);
}

function close() {
  for (const id in subscibers) {
    const res = subscibers[id];
    res.end();
  }
}

if (!module.parent) {
  http.createServer(accept).listen(8080);
  console.log('Server running on port 8080');
} else {
  exports.accept = accept;

  if (process.send) {
    process.on('message', (msg) => {
      if (msg === 'shutdown') close();
    });
  }

  process.on('SIGINT', close);
}
