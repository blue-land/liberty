module.exports = {
    entry: (__dirname,"./src/app.js"),
    output: {
      path: '/Users/fujinakashuutasuku/dev/liberty/dev/Liberty/app/dist',
      filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    resolve: {
                extensions: ['.js', '.js', '.jsx']
            },
    module: {
        rules: [
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react']
            }
          }
        }
      ]
    }
  };