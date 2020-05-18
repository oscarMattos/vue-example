const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack")

let isDevMode;

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader",
};
const styleRules = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    { loader: isDevMode ? "style-loader" : MiniCssExtractPlugin.loader },
    { loader: "css-loader", options: { sourceMap: isDevMode ? true : false } },
    { loader: "postcss-loader", 
        options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
                require('precss'),
                require('autoprefixer')
                ];
            }
        }
    },
    { loader: "sass-loader", options: { sourceMap: isDevMode ? true : false } },
    {
      loader: "sass-resources-loader",
      options: {
        sourceMap: isDevMode ? true : false,
        resources: [path.resolve(__dirname, "src/scss/app.scss")],
      },
    },
  ],
};
const imageRules = {
  test: /\.(png|svg|jp(e*)g|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: { name: "img/[name]-[hash].[ext]" },
    },
  ],
};
const htmlRules = {
  test: /\.html$/i,
  loader: "html-loader",
  options: {
    minimize: true,
    attributes: {
      list: [
        {
          tag: "img",
          attribute: "src",
          type: "src",
        },
      ],
    },
  },
};
const vueRules = {
  test: /\.vue/,
  use: [{ loader: "vue-loader" }],
};

module.exports = (enviroment, options) => {
  isDevMode = options.mode === "development"

  return {
    entry: "./src/js/main.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "main[hash].js",
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      overlay: true,
      hot: true
    },
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
      // splitChunks: {
      //   chunks: "async",
      //   minSize: 30000,
      //   maxSize: 0,
      //   minChunks: 1,
      //   maxAsyncRequests: 5,
      //   maxInitialRequests: 3,
      //   automaticNameDelimiter: "~",
      //   name: true,
      //   cacheGroups: {
      //     vendors: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name: "vendors",
      //       enforce: true,
      //       chunks: "all",
      //     },
      //     default: {
      //       minChunks: 2,
      //       priority: -20,
      //       reuseExistingChunk: true,
      //     },
      //     styles: {
      //       name: "styles",
      //       test: /\.s?css$/,
      //       chunks: "all",
      //       enforce: true,
      //     },
      //   },
      // },
    },
    module: {
      rules: [styleRules, vueRules, javascriptRules, imageRules, htmlRules],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: isDevMode ? "[name].css" : "[name].[hash].css",
        chunkFilename: isDevMode ? "[id].css" : "[id].[hash].css",
      }),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "src/index.html",
        minify: {
          removeAttributeQuotes: isDevMode ? false : true,
          collapseWhitespace: isDevMode ? false : true,
          removeComments: isDevMode ? false : true,
        },
      }),
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        root: path.resolve(__dirname, "src/"),
        components: path.resolve(__dirname, "src/js/components/"),
        assets: path.resolve(__dirname, "src/assets/img/"),
        img: path.resolve(__dirname, "src/assets/img/"),
        json: path.resolve(__dirname, "src/assets/json/"),
      },
      extensions: ["*", ".js", ".vue", ".json"],
    },
  };
};
