const express = require('express');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const app = express();

app.get('*', (req, res) => {

    console.log('Request', req.method, req.url);
    proxy.web(req, res, { target: `${req.protocol}://${req.hostname}` });
});

app.listen(3000, () => console.log('Application started on port 3000'));

app.get('*', (req, res) => {

    console.log('Request', req.method, req.url);
    proxy.web(req, res, { target: `${req.protocol}://${req.hostname}` });
});
