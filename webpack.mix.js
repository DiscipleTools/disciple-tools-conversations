let mix = require('laravel-mix');
const {browserSync} = require("laravel-mix");

mix.webpackConfig({
  output: {
    publicPath: "/wp-content/plugins/disciple-tools-conversations/dist/",
  }
})

mix.copyDirectory('node_modules/@disciple.tools/web-components/', 'dist/web-components');


mix.setPublicPath('dist')
  .js('assets/js/conversation_scripts.js', 'dist/conversation_scripts.js')
  .sourceMaps()
  .postCss('assets/css/styles.css', 'dist/styles.css')
  .browserSync({
    proxy: "https://dt.local",
    files: [
      'dist/*.js',
      'dist/*.css',
    ]
  })
