let mix = require('laravel-mix');

const source = 'platform/themes/zhxscript';
const dist = 'public/themes/zhxscript';

mix
    .js(source + '/assets/app.js', dist + '/js')
    .copy(dist + '/js/app.js', source + '/public/js');
