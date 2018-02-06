const wecoCommonDir = /node_modules\/@weco\/(?!.*node_modules)/;

module.exports = {
  webpack(config, options) {
    config.externals = config.externals.map(external => {
      if (typeof external === 'function') {
        return (context, request, callback) => {
          if (request.match(wecoCommonDir)) {
            return callback()
          }

          return external(context, request, callback)
        }
      }
      return external
    })

    config.module.rules.push({
      test: /\.+(js|jsx)$/,
      include: (str) => {
        return str.match(wecoCommonDir)
      },
      // exclude: [
      //   /node_modules/,
      //   /node_modules(?!\/@weco\/(?!.*node_modules))/
      // ],
      use: options.defaultLoaders.babel
    })

    return config
  }
};