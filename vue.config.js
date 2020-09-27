module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/style/_variables.scss";
          @import "@/style/_mixins.scss";
        `,
      },
    },
  },
}
