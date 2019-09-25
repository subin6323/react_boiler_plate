const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './react_app/main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'react_bundle.js'
   },
   devServer: {
      inline: true,
      port: 3001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react','stage-2']
            }
         },
         {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './react_app/index.html'
      })
   ]
}