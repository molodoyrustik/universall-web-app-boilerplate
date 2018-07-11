module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          },
        }
      ],
    },
  };
};