const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '../public'),
        chunkFilename: '[id].[chunkhash].js',
        filename: '[name].js',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader', options: { babelrc: true }},
                    // { loader: 'ts-loader', options: { configFile: 'tsconfig.json' } },
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg|ico)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "postcss-loader",
                  "sass-loader",
                ],
              },
        ]
    },
    optimization: {
        minimizer: [
          new TerserPlugin({parallel: true}),
          new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ESLintPlugin({
            context: 'src',
            extensions: ['ts', 'tsx'],
            emitWarning: false,
        })
    ]
};