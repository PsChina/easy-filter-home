module.exports = {
    configureWebpack: (config, isServer) => {
      if (!isServer) {
        return Object.assign(config,{
            module:{
                rules:[
                    {
                        test:/\.(scss|sass)$/,
                        use:['style-loader', 'postcss-loader', 'css-loader', 'sass-loader']
                    },
                    {
                        test:/\.css$/,
                        use: ['style-loader', 'postcss-loader', 'css-loader']
                    }
                ]
            }
        })
      }
    }
  }