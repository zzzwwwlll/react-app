const {
    createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function (app) {

    app.use('/api', createProxyMiddleware({
        target: 'http://10.250.67.92:5000',
        changeOrigin: true,
    }));
};