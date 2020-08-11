
const mix = require('laravel-mix');
const glob = require('glob');
const path = require('path');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const rimraf = require('rimraf');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const source = 'platform/core';
const dist = 'public/vendor/core';

// Default
mix.js(source + '/base/resources/assets/js/app.js', dist + '/js')
    .copy(dist + '/js/app.js', source + '/base/public/js/app.js')
    .scripts(source + '/base/resources/assets/js/config.js',  dist + '/js/config.js')
    .copy(dist + '/js/config.js', source + '/base/public/js/config.js')
    .sass(source + '/base/resources/assets/sass/app.scss',  dist + '/css')
    .copy(dist + '/css/app.css', source + '/base/public/css/app.css')
    .js(source + '/acl/resources/assets/js/profile.js', dist + '/js')
    .copy(dist + '/js/profile.js', source + '/acl/public/js')
    .js(source + '/acl/resources/assets/js/login.js', dist + '/js')
    .copy(dist + '/js/login.js', source + '/acl/public/js')
    .js(source + '/acl/resources/assets/js/role.js', dist + '/js')
    .copy(dist + '/js/role.js', source + '/acl/public/js')
    .sass(source + '/acl/resources/assets/sass/login.scss', dist + '/css')
    .copy(dist + '/css/login.css', source + '/acl/public/css')

   // .js(source + '/dashboard/resources/assets/js/dashboard.js', dist + '/js')
   // .copy(dist + '/js/dashboard.js', source + '/dashboard/public/js')
   // .sass(source + '/dashboard/resources/assets/sass/dashboard.scss', dist + '/css')
   // .copy(dist + '/css/dashboard.css', source + '/dashboard/public/css')

    .sass(source + '/media/resources/assets/sass/media.scss', dist + '/media/css')
    .js(source + '/media/resources/assets/js/media.js', dist + '/media/js')
    .js(source + '/media/resources/assets/js/jquery.addMedia.js', dist + '/media/js')
    .js(source + '/media/resources/assets/js/integrate.js', dist + '/media/js')
    .copy(dist + '/media/js', source + '/media/public/media/js')
    .copy(dist + '/media/css', source + '/media/public/media/css')

    .js(source + '/setting/resources/assets/js/setting.js', dist + '/js')
    .copy(dist + '/js/setting.js', source + '/setting/public/js')
    .sass(source + '/setting/resources/assets/sass/setting.scss', dist + '/css')
    .copy(dist + '/css/setting.css', source + '/setting/public/css');

   // .js(source + '/table/resources/assets/js/table.js', dist + '/js')
   // .copy(dist + '/js/table.js', source + '/table/public/js')
   // .js(source + '/table/resources/assets/js/filter.js', dist + '/js')
  //  .copy(dist + '/js/filter.js', source + '/table/public/js')
  //  .sass(source + '/table/resources/assets/sass/table.scss', dist + '/css')
    //.copy(dist + '/css/table.css', source + '/table/public/css');

// Global jquery
// mix.autoload({
// 'jquery': ['$', 'jQuery'],
// Popper: ['popper.js', 'default'],
// });

// 3rd party plugins css/js
mix.sass(source + '/base/resources/assets/plugins/plugins.scss',  dist + '/plugins/global/plugins.bundle.css').then(() => {
    // remove unused preprocessed fonts folder
    rimraf(path.resolve( dist + '/fonts'), () => {});
    rimraf(path.resolve( dist + '/images'), () => {});
}).sourceMaps(!mix.inProduction())
    // .setResourceRoot('./')
    .options({processCssUrls: false}).js([source + '/base/resources/assets/plugins/plugins.js'],  dist + '/plugins/global/plugins.bundle.js');

// Metronic css/js
mix.sass(source + '/base/resources/assets/metronic/sass/style.scss', dist + '/css/style.bundle.css', {
    sassOptions: {includePaths: ['node_modules']},
})
    // .options({processCssUrls: false})
    .js(source + '/base/resources/assets/js/scripts.js', dist + '/js/scripts.bundle.js');

// Custom 3rd party plugins
(glob.sync(source + '/base/resources/assets/plugins/custom/**/*.js') || []).forEach(file => {
    mix.js(file, dist + `/${file.replace(source + '/base/resources/assets/', '').replace('.js', '.bundle.js')}`);
});
(glob.sync(source + '/base/resources/assets/plugins/custom/**/*.scss') || []).forEach(file => {
    mix.sass(file, dist + `/${file.replace(source + '/base/resources/assets/', '').replace('.scss', '.bundle.css')}`);
});

// Metronic css pages (single page use)
(glob.sync(source + '/base/resources/assets/metronic/sass/pages/**/!(_)*.scss') || []).forEach(file => {
    file = file.replace(/[\\\/]+/g, '/');
    mix.sass(file, file.replace(source + '/base/resources/assets/metronic/sass', dist + '/css').replace(/\.scss$/, '.css'));
});

// Metronic js pages (single page use)
(glob.sync(source + '/base/resources/assets/metronic/js/pages/**/*.js') || []).forEach(file => {
    mix.js(file, dist + `/${file.replace(source + '/base/resources/assets/metronic/', '')}`);
});

// Metronic media
mix.copyDirectory(source + '/base/resources/assets/metronic/media', dist + '/media');

// Metronic theme
(glob.sync(source + '/base/resources/assets/metronic/sass/themes/**/!(_)*.scss') || []).forEach(file => {
    file = file.replace(/[\\\/]+/g, '/');
    mix.sass(file, file.replace(source + '/base/resources/assets/metronic/sass', dist + '/css').replace(/\.scss$/, '.css'));
});

mix.webpackConfig({
    plugins: [
        new ReplaceInFileWebpackPlugin([
            {
                // rewrite font paths
                dir: path.resolve(dist + '/plugins/global'),
                test: /\.css$/,
                rules: [
                    {
                        // fontawesome
                        search: /url\((\.\.\/)?webfonts\/(fa-.*?)"?\)/g,
                        replace: 'url(./fonts/@fortawesome/$2)',
                    },
                    {
                        // flaticon
                        search: /url\(("?\.\/)?font\/(Flaticon\..*?)"?\)/g,
                        replace: 'url(./fonts/flaticon/$2)',
                    },
                    {
                        // flaticon2
                        search: /url\(("?\.\/)?font\/(Flaticon2\..*?)"?\)/g,
                        replace: 'url(./fonts/flaticon2/$2)',
                    },
                    {
                        // keenthemes fonts
                        search: /url\(("?\.\/)?(Ki\..*?)"?\)/g,
                        replace: 'url(./fonts/keenthemes-icons/$2)',
                    },
                    {
                        // lineawesome fonts
                        search: /url\(("?\.\.\/)?fonts\/(la-.*?)"?\)/g,
                        replace: 'url(./fonts/line-awesome/$2)',
                    },
                    {
                        // socicons
                        search: /url\(("?\.\.\/)?font\/(socicon\..*?)"?\)/g,
                        replace: 'url(./fonts/socicon/$2)',
                    },
                ],
            },
        ]),
    ],
});

// Webpack.mix does not copy fonts, manually copy
(glob.sync(source + '/base/resources/assets/metronic/plugins/**/*.+(woff|woff2|eot|ttf)') || []).forEach(file => {
    var folder = file.match(/platform\/core\/base\/resources\/assets\/metronic\/plugins\/(.*?)\//)[1];
    mix.copy(file, dist + `/plugins/global/fonts/${folder}/${path.basename(file)}`);
});
(glob.sync('node_modules/+(@fortawesome|socicon|line-awesome)/**/*.+(woff|woff2|eot|ttf)') || []).forEach(file => {
    var folder = file.match(/node_modules\/(.*?)\//)[1];
    mix.copy(file, dist + `/plugins/global/fonts/${folder}/${path.basename(file)}`);
});

// Optional: Import datatables.net
mix.scripts([
    'node_modules/datatables.net/js/jquery.dataTables.js',
    'node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js',
    'node_modules/datatables.net-autofill/js/dataTables.autoFill.min.js',
    'node_modules/datatables.net-autofill-bs4/js/autoFill.bootstrap4.min.js',
    'node_modules/jszip/dist/jszip.min.js',
    'node_modules/pdfmake/build/pdfmake.min.js',
    'node_modules/pdfmake/build/vfs_fonts.js',
    'node_modules/datatables.net-buttons/js/dataTables.buttons.min.js',
    'node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js',
    'node_modules/datatables.net-buttons/js/buttons.colVis.js',
    'node_modules/datatables.net-buttons/js/buttons.flash.js',
    'node_modules/datatables.net-buttons/js/buttons.html5.js',
    'node_modules/datatables.net-buttons/js/buttons.print.js',
    'node_modules/datatables.net-colreorder/js/dataTables.colReorder.min.js',
    'node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js',
    'node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js',
    'node_modules/datatables.net-keytable/js/dataTables.keyTable.min.js',
    'node_modules/datatables.net-responsive/js/dataTables.responsive.min.js',
    'node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js',
    'node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.min.js',
    'node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.min.js',
    'node_modules/datatables.net-scroller/js/dataTables.scroller.min.js',
    'node_modules/datatables.net-select/js/dataTables.select.min.js',
], dist + '/plugins/custom/datatables/datatables.bundle.js');
mix.styles([
    'node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css',
    'node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css',
    'node_modules/datatables.net-autofill-bs4/css/autoFill.bootstrap4.min.css',
    'node_modules/datatables.net-colreorder-bs4/css/colReorder.bootstrap4.min.css',
    'node_modules/datatables.net-fixedcolumns-bs4/css/fixedColumns.bootstrap4.min.css',
    'node_modules/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.min.css',
    'node_modules/datatables.net-keytable-bs4/css/keyTable.bootstrap4.min.css',
    'node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css',
    'node_modules/datatables.net-rowgroup-bs4/css/rowGroup.bootstrap4.min.css',
    'node_modules/datatables.net-rowreorder-bs4/css/rowReorder.bootstrap4.min.css',
    'node_modules/datatables.net-scroller-bs4/css/scroller.bootstrap4.min.css',
    'node_modules/datatables.net-select-bs4/css/select.bootstrap4.min.css',
], dist + '/plugins/custom/datatables/datatables.bundle.css');
