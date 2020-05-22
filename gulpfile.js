'use strict'

var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');
var inject = require('gulp-inject');
var clean = require('gulp-clean');

var pluginAssets = {
    css: [
        './bower_components/toastr/toastr.scss',
        './bower_components/nprogress/nprogress.css',
        './bower_components/select2/dist/css/select2.min.css',
        './bower_components/summernote/dist/summernote.css',
        './bower_components/nestable2/dist/jquery.nestable.min.css',
        './public/css/uploadfile.css',
        './node_modules/fontawesome-iconpicker/dist/css/fontawesome-iconpicker.css',
        './public/css/plugins/bs_colorpicker/bootstrap-colorpicker.min.css',
        './bower_components/daterangepicker/daterangepicker.css',
        './bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
    ],
    js: [
        './bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
        './bower_components/toastr/toastr.js',
        './node_modules/sweetalert/dist/sweetalert.min.js',
        './bower_components/nprogress/nprogress.js',
        './bower_components/iCheck/icheck.min.js',
        './bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
        './bower_components/bootstrap-timepicker/js/bootstrap-timepicker.js',
        './bower_components/select2/dist/js/select2.full.min.js',
        './bower_components/summernote/dist/summernote.js',
        './bower_components/nestable2/dist/jquery.nestable.min.js',
        './public/js/uploadfile.js',
        './node_modules/fontawesome-iconpicker/dist/js/fontawesome-iconpicker.js',
        './public/js/plugins/bs_colorpicker/bootstrap-colorpicker.min.js',
        './bower_components/moment/min/moment.min.js',
        './bower_components/daterangepicker/daterangepicker.js',

    ]
}

var assetsDir = './resources/assets';
var publicDir = './public';
var pluginPublicDir = publicDir + '/css/plugins';
var pluginStyleSrc = assetsDir + '/sass/plugins';
var pluginJsSrc = assetsDir + '/js/plugins';


gulp.task('plugin:style', gulp.series( pluginStyleAssets, pluginStyleCopy, pluginStyleAddAuto, pluginStyleAddAuto,  pluginStyleBuild ) );

gulp.task('plugin:js', gulp.series( pluginJSClean, pluginJSCopy, pluginJSBuild ));

gulp.task('build:plugin', gulp.parallel('plugin:js', 'plugin:style'));

gulp.task('build:core', core);

gulp.task('default', main);

function main(done) {
    gulp.src(assetsDir + '/js/app.js')
        .pipe(gulp.dest(publicDir + '/js'));

    done();
}



function pluginStyleAssets (done) {
    
    gulp.src('./bower_components/iCheck/skins/square/*.png')
    .pipe(gulp.dest(pluginPublicDir + '/icheck'));
    
    gulp.src('./bower_components/iCheck/skins/square/_all.css')
    .pipe(rename('icheck.css'))
    .pipe(replace('url(', 'url(plugins/icheck/'))
    .pipe(gulp.dest(pluginStyleSrc))
    

    gulp.src('./bower_components/summernote/dist/font/*')
        .pipe(gulp.dest(pluginPublicDir + '/summernote/font'));

    gulp.src('./bower_components/summernote/dist/summernote.css')
        .pipe(rename('summernote.min.css'))
        .pipe(replace('url("./font/','url("./plugins/summernote/font/' ))
        .pipe(gulp.dest(pluginStyleSrc))
    /**
     * Code here
     */
    done();
};

function pluginStyleCopy(done) {
    
    if(!pluginAssets.css.length) return done();
    return gulp.src(pluginAssets.css)
    .pipe(gulp.dest(pluginStyleSrc));
};

function pluginStyleAddAuto(done) {
    
    return gulp.src(assetsDir + '/sass/app.plugins.scss')
    .pipe(inject(gulp.src(assetsDir + '/sass/plugins/**/*.*', {read: false}), {
        starttag: '/* inject:imports */',
        endtag: '/* endinject */',
        transform: function (filepath, file, index, length, targetFile) {
            var filepath = ('.' + filepath).replace(assetsDir + '/sass', '');
            filepath = filepath.replace(/.css|.scss|.sass/g, '');
            return '@import ".' + filepath + '";';
        }
    }))
    .pipe(gulp.dest(assetsDir + '/sass/'));
};

function pluginStyleBuild() {
    return gulp.src(assetsDir + '/sass/app.plugins.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(publicDir + '/css'));
};

function pluginJSClean() {
    return gulp.src(pluginJsSrc + '/**/*', {read: false})
    .pipe(clean());
};

function pluginJSCopy() {
    if(!pluginAssets.js.length) return done();
    var index = 10;
    return gulp.src(pluginAssets.js)
    .pipe(rename(function (path) {
        path.basename = (index++ + "-" + path.basename);
    }))
    .pipe(gulp.dest(pluginJsSrc));
};

function pluginJSBuild() {
    return gulp.src(pluginJsSrc + '/*.js')
    .pipe(concat('app.plugins.js'))
    .pipe(gulp.dest(publicDir + '/js'))
    .pipe(gulp.dest(assetsDir + '/js'));
};

function core(done) {
    // core js
    gulp.src([
        './node_modules/admin-lte/bower_components/jquery/dist/jquery.min.js',
        './node_modules/admin-lte/bower_components/jquery-ui/jquery-ui.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/admin-lte/dist/js/adminlte.min.js',
        './node_modules/jquery-pjax/jquery.pjax.js',

    ])
    .pipe(concat('app.core.js'))
    .pipe(gulp.dest('./public/js'));
    
    gulp.src(assetsDir + '/sass/app.core.scss')
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(gulp.dest(publicDir + '/css'));

    done();
}





