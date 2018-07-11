const path = require('path');
const contentBase = path.join(__dirname, "../public");

module.exports = function() {
  return {
    devServer: {
    	inline: true,
    	contentBase: contentBase,
    	compress: true,
    	port:8050,
    	watchContentBase: true,
    	historyApiFallback: true,
      proxy: {
      '/api': 'http://localhost:3001'
      }
    }
  };
};
