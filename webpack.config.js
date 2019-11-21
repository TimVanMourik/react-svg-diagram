const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (env) {
  const minimize = Boolean(env && env.hasOwnProperty('minimize'))

  return {
    mode: 'production',
    entry: {
      ReactSVGPanZoom: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
      path: path.join(__dirname, 'build-umd'),
      filename: `react-svg-diagram${minimize ? '.min' : ''}.js`,
      library: "ReactSVGDiagram",
      libraryTarget: "umd"
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
      },
    },
    devtool: "source-map",
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    },
    optimization: {
      minimize,
    }
  }
};
