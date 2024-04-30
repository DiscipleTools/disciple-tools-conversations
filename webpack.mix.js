let mix = require('laravel-mix');
const {browserSync} = require("laravel-mix");

mix.webpackConfig({
  output: {
    publicPath: "/wp-content/plugins/disciple-tools-conversations/dist/",
  }
})

mix.setPublicPath('dist')
  .js('assets/js/conversation_scripts.js', 'dist/conversation_scripts.js')
  .postCss('assets/css/styles.css', 'dist/styles.css')
  .browserSync({
    proxy: "https://dt.local",
    files: [
      'dist/*.js',
      'dist/*.css',
    ]
  })
