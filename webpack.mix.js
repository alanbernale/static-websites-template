const mix = require('laravel-mix');

mix
    .js('src/js/app.js', 'js/app.min.js')
    .sass('src/sass/app.scss', 'css/app.min.css')
    .options({
        processCssUrls: false
    })
    .setPublicPath('build')
    .disableSuccessNotifications()
    .browserSync({
        server: {
            baseDir: "build"
        },
        files: [
            'build/*'
        ]
    });
