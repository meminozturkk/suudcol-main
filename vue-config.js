module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3080/api/users',
          changeOrigin:true
        },
      }
    }
  }