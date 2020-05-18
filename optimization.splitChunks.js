const splitChunks = {
  chunks: "async",
  minSize: 30000,
  maxSize: 0,
  minChunks: 1,
  maxAsyncRequests: 5,
  maxInitialRequests: 3,
  automaticNameDelimiter: "~",
  name: true,
  cacheGroups: {
    vendors: {
      test: /[\\/]node_modules[\\/]/,
      name: "vendors",
      enforce: true,
      chunks: "all",
    },
    default: {
      minChunks: 2,
      priority: -20,
      reuseExistingChunk: true,
    },
    styles: {
      name: "styles",
      test: /\.s?css$/,
      chunks: "all",
      enforce: true,
    },
  },
};

export { splitChunks };
