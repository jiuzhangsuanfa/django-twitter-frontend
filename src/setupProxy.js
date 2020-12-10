const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000/',
      pathRewrite: { '/api': '/api' }, // 将对应地址映射到 /proxy 路径下
      changeOrigin: false, // 不更换请求源，以避免 CSRF 错误
    })
  );
};
