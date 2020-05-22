const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

const publicPath = path.resolve('../../public/');
const assetPath = __dirname + '/Resources/assets/';
const assetPathLight = __dirname + '/Resources/assets/light/';
const assetPathDark = __dirname + '/Resources/assets/dark/';

const LiveReloadPlugin = require('webpack-livereload-plugin');
mix.webpackConfig({
  plugins: [
    new LiveReloadPlugin()
  ]
});

mix.copyDirectory(assetPathLight + '/images', path.resolve('../../storage/app/public/default/light/images'));
mix.copyDirectory(assetPathDark + '/images', path.resolve('../../storage/app/public/default/dark/images'));

mix.copyDirectory(assetPathLight + '/fonts', publicPath + '/imba/light/fonts');
mix.copyDirectory(assetPathLight + '/images', publicPath + '/imba/light/images');

mix.js(assetPath + '/js/app.js', 'imba/js/imba.js')
  .sass(assetPath + '/sass/app.sass', 'imba/css/imba.css');

mix.styles([
  assetPathLight + '/css/bootstrap.min.css',
  assetPathLight + '/css/font-awesome.min.css',
  assetPathLight + '/css/animations.css',
  assetPathLight + '/css/animate.css',
  assetPathLight + '/css/morphext.css',
  assetPathLight + '/css/lightbox.min.css',
  assetPathLight + '/css/modal-video.min.css',
  assetPathLight + '/css/style.css',
  assetPathLight + '/css/custom.css',
  publicPath + '/imba/css/imba.css',
], publicPath + '/imba/light/css/my-css.css');

mix.scripts([
  assetPathLight + '/js/jquery-3.2.1.min.js',
  assetPathLight + '/js/popper.min.js',
  assetPathLight + '/js/bootstrap.min.js',
  assetPathLight + '/js/blazy.min.js',
  assetPathLight + '/js/morphext.min.js',
  assetPathLight + '/js/isotope.pkgd.min.js',
  assetPathLight + '/js/lightbox.min.js',
  assetPathLight + '/js/jquery-modal-video.min.js',
  assetPathLight + '/js/validator.min.js',
  assetPathLight + '/js/strider.js',
  assetPath + '/js/app.js',
], publicPath + '/imba/light/js/my-js.js');


mix.copyDirectory(assetPathDark + '/fonts', publicPath + '/imba/dark/fonts');
mix.copyDirectory(assetPathDark + '/images', publicPath + '/imba/dark/images');

mix.styles([
  assetPathDark + '/css/bootstrap.min.css',
  assetPathDark + '/css/font-awesome.min.css',
  assetPathDark + '/css/animations.css',
  assetPathDark + '/css/animate.css',
  assetPathDark + '/css/morphext.css',
  assetPathDark + '/css/lightbox.min.css',
  assetPathDark + '/css/modal-video.min.css',
  assetPathDark + '/css/style.css',
  assetPathDark + '/css/custom.css',
  publicPath + '/imba/css/imba.css',
], publicPath + '/imba/dark/css/my-css.css');

mix.scripts([
  assetPathDark + '/js/jquery-3.2.1.min.js',
  assetPathDark + '/js/popper.min.js',
  assetPathDark + '/js/bootstrap.min.js',
  assetPathDark + '/js/blazy.min.js',
  assetPathDark + '/js/morphext.min.js',
  assetPathDark + '/js/isotope.pkgd.min.js',
  assetPathDark + '/js/lightbox.min.js',
  assetPathDark + '/js/jquery-modal-video.min.js',
  assetPathDark + '/js/validator.min.js',
  assetPathDark + '/js/strider.js',
  assetPath + '/js/app.js',
], publicPath + '/imba/dark/js/my-js.js');

if (mix.inProduction()) {
  mix.version();
}