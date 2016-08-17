var path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'main.ts'),
    // Config for our build files
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.(es6|js)$/, exclude: /(libs|node_modules)/, loader: 'babel?stage=0'},
            // support for .html as raw text
            {test: /\.html$/, loader: 'raw'},
            {
                test: /\.ts$/,
                exclude: /(libs|node_modules)/,
                loader: 'typescript-simple',
                query: {
                    'ignoreWarnings': [
                        2300, // 2300 -> Duplicate identifier
                        2309, // 2309 -> An export assignment cannot be used in a module with other exported elements.
                        2346, // 2346 -> Supplied parameters do not match any signature of call target.
                        2432  // 2432 -> In an enum with multiple declarations, only one declaration can omit an initializer for its first enum element.
                    ]
                }
            }
        ],
    },
    resolve: {
        alias: {
            libs: path.resolve(__dirname, 'libs'),
            nm: path.resolve(__dirname, "node_modules")
        }
    }
};