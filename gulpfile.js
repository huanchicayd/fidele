var gulp = require('gulp');
    imagemin = require('gulp-imagemin');
    clean = require('gulp-clean');
    cssmin = require('gulp-cssmin');

gulp.task('default', ['copy'], function(){
    gulp.start('build-img', 'build-css');
});

gulp.task('copy', ['clean'], function(){
    return gulp.src([
        'dev/**/*',
        '!dev/styles/**'
    ])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function(){
    gulp.src('dev/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build-css', function(){
    gulp.src('dev/styles/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/styles'));
});