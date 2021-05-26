module.exports = {
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Alessandro Mondelli | Jr. Web Developer";
            return args;
        })
  },
  css: {
    loaderOptions: {
      scss: {
          prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
          `
      }
    }
  },
};