const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
// Create Express Server
const app = express();

// Configuration
const PORT = process.env.PORT;
const HOST = "0.0.0.0";
const API_SERVICE_URL = process.env.API_SERVICE_URL || "https://danielwaruo.makinika.com";

// Logging
app.use(morgan('dev'));

// Proxy endpoints
app.use('*', createProxyMiddleware({
   target: API_SERVICE_URL,
   changeOrigin: true,
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
   console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
