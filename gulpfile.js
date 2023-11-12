import gulp from 'gulp';						// Oh, the great and mighty Gulp!
import htmlmin from 'gulp-htmlmin';				// minify the html
import concat from 'gulp-concat';				// concatenate several files into one
import minify from 'gulp-minify';				// minify the JS
import cleanCSS from 'gulp-clean-css';			// minify the CSS
import clean from 'gulp-clean';					// removing files
import browserSync from 'browser-sync';			// sync browsers while developing
import imagemin from 'gulp-imagemin';			// minify images
import autoprefixer from 'gulp-autoprefixer';	// Autoprefixer for lame browsers
import dartSass from 'sass';					// SASS/SCSS
import gulpSass from 'gulp-sass';				// SASS/SCSS
const sass = gulpSass(dartSass);				// SASS/SCSS



const html = () => {
	return gulp.src('./src/*.html')								// take all html files from source folder
		.pipe(htmlmin({ collapseWhitespace: true }))	// minify the html
		.pipe(gulp.dest('./dist'))								// put them into the destination folder
	;
};

const js = () => {
	return gulp.src('./src/scripts/**/*.js')			// take all .js from all these folders
		
		// Для даного степ прокету не бачу сенсу мініфікувати JS та зклеювати його в один файл, бо ж маємо класи, .
		
		/*
		.pipe(concat('script.js'))						// concatenate them into one file
		.pipe(minify({									// minify the result
			ext:{
				// src:'.js',							// full-size file naming
				min:'.min.js'							// minified file naming
		},
		noSource: true									// "true" means "do NOT output source files in the destination folder"
		}))
		*/
		.pipe(gulp.dest('./dist/scripts'))              // put .js and .min.js into the destination folder
	;
};

const css = () => {
	return gulp.src('./src/styles/main.scss')  				// take main.scss (where all the imports are written)
		.pipe(sass().on('error', sass.logError))		// make computer understand sass/scss
		.pipe(autoprefixer({						// apply Autoprefixer
			cascade: false									// don't let Autoprefixer cascade prefixes (because whitespace will be minified anyway)
		}))
		.pipe(concat('styles.min.css'))					// concatenate and rename
		.pipe(cleanCSS({compatibility: 'ie8'}))		// minify CSS
		.pipe(gulp.dest('./dist/styles'))					// put them into the destination folder
	;
};

const fonts = () => {
	return gulp.src('./src/fonts/*.{ttf,otf}')				// take all font files from source folder
		.pipe(gulp.dest('./dist/fonts'))					// put them into the destination folder
	;
};

const cleanDist = () => {
	return gulp.src('./dist', {read: false, allowEmpty: true})	// delete the destination folder if it exists
		.pipe(clean())
	;
};

const image = () => {
	return gulp.src('./src/images/**/*.*')					// get all files in these (sub)folders
		.pipe(imagemin())									// minify them
		.pipe(gulp.dest('./dist/images'))					// put them into the destination folder
	;
}

const watcher = () => {
	gulp.watch('./src/*.html',                        html).on('all', browserSync.reload);
	gulp.watch('./src/styles/**/*.{sass,scss,css}',    css).on('all', browserSync.reload);
	gulp.watch('./src/scripts/**/*.js',                 js).on('all', browserSync.reload);
	gulp.watch('./src/images/**/*.js',               image).on('all', browserSync.reload);
};

const server = () => {
	browserSync.init({
		server: {
			baseDir: "./dist"
		},
		notify: false								// do not display that annoying popover
});
}



gulp.task('cleanDist', cleanDist);
gulp.task('html', html);
gulp.task('script', js);
gulp.task('style', css);
gulp.task('browser-sync', server);
gulp.task('image', image);
gulp.task('fonts', fonts);



// BUILD & DEV:
// 
// run "gulp dev" to continue work.
// run "gulp build" to build the final result.

gulp.task('dev', gulp.series(
	cleanDist, 
	gulp.parallel(html, css, js, image, fonts),
	gulp.parallel(server, watcher)
));

gulp.task('build', gulp.series(
	cleanDist, 
	gulp.parallel(html, css, js, image, fonts)
));
