const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.options({
    processCssUrls: true,
    fileLoaderDirs: {
        images: 'modules/cb_site/images'
    }
});

const publicPath = path.resolve( '../../public/');

/**
 * Override rule to avoid adding hash to url in css
 * Or processCssUrls option
 *
 * @ref laravel-mix/src/builder/webpack-rules.js
 */
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: Config.fileLoaderDirs.images + '/[name].[ext]'
                        },
                    },
                    {
                        loader: 'img-loader',
                        options: Config.imgLoaderOptions
                    }
                ],
            }
        ]
    }
});


mix.scripts([
    __dirname + '/Resources/assets/js/app.js'
], publicPath + '/modules/cb_site/js/app.js');

mix.sass( __dirname + '/Resources/assets/sass/app.sass', publicPath + '/modules/cb_site/css/app.css',{
    implementation: require('node-sass')
});

mix.copyDirectory('../../node_modules/summernote-image-attributes-editor', publicPath + '/summernote');
mix.copyDirectory('node_modules/bootstrap', publicPath + '/modules/cb_site/libraries/bootstrap');
mix.copyDirectory('node_modules/jquery', publicPath + '/modules/cb_site/libraries/jquery');
mix.copyDirectory('node_modules/font-awesome', publicPath + '/modules/cb_site/libraries/font-awesome');
mix.copyDirectory('node_modules/owl.carousel', publicPath + '/modules/cb_site/libraries/owl.carousel');
mix.copyDirectory('node_modules/isotope-layout', publicPath + '/modules/cb_site/libraries/isotope-layout');
mix.copyDirectory('node_modules/simplebar', publicPath + '/modules/cb_site/libraries/simplebar');
mix.copyDirectory('node_modules/parallax-js', publicPath + '/modules/cb_site/libraries/parallax-js');
mix.copyDirectory('node_modules/vanilla-lazyload', publicPath + '/modules/cb_site/libraries/vanilla-lazyload');
mix.copyDirectory(publicPath + '/modules/cb_site/libraries/font-awesome/fonts',publicPath + '/modules/cb_site/fonts');

mix.scripts([
    publicPath + '/modules/cb_site/libraries/jquery/dist/jquery.min.js',
    publicPath + '/modules/cb_site/libraries/bootstrap/dist/js/bootstrap.min.js'
],publicPath + '/modules/cb_site/js/core.js');

mix.scripts([
    publicPath + '/modules/cb_site/libraries/owl.carousel/dist/owl.carousel.min.js',
    publicPath + '/modules/cb_site/libraries/isotope-layout/dist/isotope.pkgd.min.js',
    publicPath + '/modules/cb_site/libraries/simplebar/dist/simplebar.min.js',
    publicPath + '/modules/cb_site/libraries/parallax-js/dist/parallax.min.js',
    publicPath + '/modules/cb_site/vivus/vivus.min.js',
    publicPath + '/modules/cb_site/libraries/vanilla-lazyload/dist/lazyload.min.js',
], publicPath + '/modules/cb_site/js/plugin.js');

mix.styles([
    publicPath + '/modules/cb_site/libraries/bootstrap/dist/css/bootstrap.min.css',
    publicPath + '/modules/cb_site/libraries/font-awesome/css/font-awesome.min.css',
    publicPath + '/modules/cb_site/libraries/owl.carousel/dist/assets/owl.carousel.min.css',
    publicPath + '/modules/cb_site/libraries/owl.carousel/dist/assets/owl.theme.default.min.css',
    publicPath + '/modules/cb_site/libraries/simplebar/dist/simplebar.min.css',
], publicPath + '/modules/cb_site/css/plugin.css');

mix.minify(publicPath + '/modules/cb_site/css/plugin.css')
mix.minify(publicPath + '/modules/cb_site/css/app.css')
mix.minify(publicPath + '/modules/cb_site/js/plugin.js')
mix.minify(publicPath + '/modules/cb_site/js/core.js')
mix.minify(publicPath + '/modules/cb_site/js/app.js')

if (mix.inProduction()) {
    mix.version();
}