const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin")

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
    {
      loader: "postcss-loader",
      options: {
        plugins: function () {
          // post css plugins, can be exported to postcss.config.js
          return [require("precss"), require("autoprefixer")];
        },
      },
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

export { javascriptRules, styleRules, imageRules, htmlRules, vueRules };