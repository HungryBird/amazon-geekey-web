const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.export = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    productionSourceMap: false,
    publicPath: '/',
}