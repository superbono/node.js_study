const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy에서 하는 일: 방화벽 기능, 웹 필터 기능, 캐쉬 데이터, 공유 데이터 제공

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};