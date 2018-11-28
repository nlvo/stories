var gulp = require('gulp');

// Require the gulp-sass plugin
var sass = require('gulp-sass');

var concat = require('gulp-concat');

var minify = require('gulp-minify');

var browserSync = require('browser-sync').create();

// convert all scss files to one css
// taak: omzetten van scss naar css
gulp.task('sass', function() {
    return gulp.src('resources/scss/main.scss')
        .pipe(sass()) //convert
        .pipe(concat('style.css')) //minify
        .pipe(gulp.dest('css')) //destination
		.pipe(browserSync.reload({ stream: true}));
});

// sync
// taak: browserherladen
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
    })
});

// watch for any changes and reload
// taak
gulp.task('watch', ['browserSync', 'sass'], function() {
    // browser word herladen 
    // op het moment dat een html/sass/js bestand 
    // word aangepast aka opgeslagen
    gulp.watch('resources/scss/**/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload); 
});