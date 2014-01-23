var gulp = require('gulp');
var tasks = require('gulp-load-plugins')();
var open = require('open');
var tinylr = require('tiny-lr');
var preview = require('./preview');
var lrServer = tinylr();

gulp.task('build', function() {
	gulp.src('app/*.html')
		.pipe(gulp.dest('dist/'));

	gulp.src('app/img/**/*.png')
		.pipe(tasks.imagemin())
		.pipe(gulp.dest('dist/img'));

	gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'));

	gulp.src('lib/phaser/build/phaser.min.js')
		.pipe(gulp.dest('dist/lib'));
});

gulp.task('preview', function() {
	preview.listen(3000);

	lrServer.listen(35729, function(err) {
		if (err) return console.log(err);

		gulp.run('watch');

		open('http://localhost:3000/');
	});
});

gulp.task('watch', function() {
	gulp.watch('app/*.html', function() {
		gulp.src('app/*.html')
			.pipe(gulp.dest('dist/'))
			.pipe(tasks.livereload(lrServer));
	});

	gulp.watch('app/js/**/*.js', function() {
		gulp.src('app/js/**/*.js')
			.pipe(gulp.dest('dist/js'))
			.pipe(tasks.livereload(lrServer));
	});

	gulp.src('app/img/**/*.png')
		.pipe(tasks.watch(function(files) {
			return files.pipe(tasks.imagemin())
				.pipe(gulp.dest('dist/'))
				.pipe(tasks.livereload(lrServer));
		}));
});

gulp.task('default', function() {
	gulp.run('build');

	gulp.run('preview');
});