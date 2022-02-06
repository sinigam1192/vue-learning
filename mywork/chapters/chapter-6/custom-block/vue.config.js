const loader = require.resolve('./loader.js')
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('docs')
            .resourceQuery(/blockType=docs/)
            .use('docs')
            .loader(loader)
    }
}

