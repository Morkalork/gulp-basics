var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');
	
var cssPath = 'src/style/*.less';
var jsPath = 'src/js/*.js';
var htmlPath = 'src/index.htm';
var assetPath = 'src/assets/*';

gulp.task('css', function() {
	return gulp.src(cssPath)	//Get all less files from src/style/
		.pipe(less())					//Pass them on to less			
		.pipe(concat('style.css'))		//Concat all files to one big style.css-file
		.pipe(gulp.dest('dist/style'))	//Pass the less result to gulp so it can be moved to dist/css
});

gulp.task('js', function(){
	return gulp.src(jsPath)	//Get all the javascript files from src/js/
		.pipe(uglify())				//Pass them on to uglify
		.pipe(concat('all.js'))		//Concat all the files into one javascript file
		.pipe(gulp.dest('dist/js'))	//Pass the result to gulp so it can be moved to dist/js
});

gulp.task('html', function(){
	return gulp.src(htmlPath)
		.pipe(gulp.dest('dist'))
});

gulp.task('assets', function(){
	return gulp.src(assetPath)
		.pipe(gulp.dest('dist/assets'))
});

gulp.task('watch', function(){
	
	gulp.watch(cssPath, ['css']);
	gulp.watch(jsPath, ['js']);
	gulp.watch(htmlPath, ['html']);
	gulp.watch(assetPath, ['assets']);
});

gulp.task('default', ['css', 'js', 'html', 'assets']);
