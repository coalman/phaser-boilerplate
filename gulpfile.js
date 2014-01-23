var gulp = require('gulp');
var tasks = require('gulp-load-plugins')({
	pattern: 'gulp-*',
	config: 'package.json',
	scope: ['devDependencies'],
	replaceString: 'gulp-',
	camelize: true
});

gulp.task('build', function() {
	gulp.src('app/*.html')
		.pipe('dist/');

	gulp.src('app/img/**/*.png')
		.pipe('dist/img');

	gulp.src('app/js/**/*.js')
		.pipe('dist/js');

	gulp.src('lib/phaser/build/phaser.min.js')
		.pipe('dist/lib');
});

gulp.task('default', function() {

});