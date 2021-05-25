const path = require('path');
const webpack = require('webpack')

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '~': path.resolve('public/'),
        },
    },
      output: {
         chunkFilename: 'js/[name].js?id=[chunkhash]',
    },
    plugins: [
        // For vue3
        new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        }),
    ],

};

