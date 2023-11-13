import gulp from 'gulp';						// Oh, the great and mighty Gulp!
import htmlmin from 'gulp-htmlmin';				// minify the html
import concat from 'gulp-concat';				// concatenate several files into one
import minify from 'gulp-minify';				// minify the JS
import cleanCSS from 'gulp-clean-css';			// minify the CSS
import clean from 'gulp-clean';					// removing files
import browserSync, {notify} from 'browser-sync';			// sync browsers while developing
import imagemin from 'gulp-imagemin';			// minify images
import autoprefixer from 'gulp-autoprefixer';	// Autoprefixer for lame browsers
import dartSass from 'sass';					// SASS/SCSS 1
import gulpSass from 'gulp-sass';				// SASS/SCSS 2
const sass = gulpSass(dartSass);				// SASS/SCSS 3



const deleteIndex = () => {
	return gulp.src('./src/index.html', {
		read: false,
		allowEmpty: true
	})    // delete the "./src/index.html" if it exists
		.pipe(clean());
};



const indexConcat = () => {
	return gulp.src([											// take these files in THIS order
		'./src/index/index-10-header.html',
		'./src/index/index-20-filters.html',
		'./src/index/index-30-mainblock.html'])
		.pipe(concat("index.html"))							// concatenate them into this one file
		.pipe(gulp.dest('./src'))								// put that file in the 'src' folder (another task will minify and put ALL html files in the destination folder)
		;
};



const html = () => {
	return gulp.src('./src/*.html')								// take all html files from the 'src' folder (but not subfolders!)
		.pipe(htmlmin({ collapseWhitespace: true }))	// minify the html
		.pipe(gulp.dest('./dist'))								// put them into the destination folder
	;
};


const js = () => {
	return gulp.src('./src/scripts/**/*.js')            // take all .js from all these folders
		
		// Для даного степ прокету не бачу сенсу мініфікувати JS та зклеювати його в один файл, бо ж маємо класи.
		
		/*
		.pipe(concat('script.js'))						// concatenate them into one file
		.pipe(minify({									// minify the result
			ext:{
				// src:'.js',							// full-size file extension
				min:'.min.js'							// minified file extension
		},
		noSource: true									// "true" means "do NOT output source files in the destination folder"
		}))
		*/
		.pipe(gulp.dest('./dist/scripts'))              // put the results into the destination folder
		;
};

const css = () => {
	return gulp.src('./src/styles/main.scss')                // take main.scss (where all the imports are written)
		.pipe(sass().on('error', sass.logError))        // make computer understand sass/scss
		.pipe(autoprefixer({						// apply Autoprefixer
			cascade: false									// don't let Autoprefixer cascade prefixes (because whitespace will be minified anyway)
		}))
		.pipe(concat('styles.min.css'))                    // concatenate and rename
		.pipe(cleanCSS({compatibility: 'ie8'}))        // minify CSS
		.pipe(gulp.dest('./dist/styles'))					// put them into the destination folder
		;
};

const fonts = () => {
	return gulp.src('./src/fonts/*.{ttf,otf}')                // take all font files from source folder
		.pipe(gulp.dest('./dist/fonts'))					// put them into the destination folder
		;
};

const cleanDist = () => {
	return gulp.src('./dist', {read: false, allowEmpty: true})    // delete the destination folder if it exists
		.pipe(clean())
		;
};

const image = () => {
	return gulp.src('./src/images/**/*.*')                    // get all files in these (sub)folders
		.pipe(imagemin())                                    // minify them
		.pipe(gulp.dest('./dist/images'))					// put them into the destination folder
		;
}

const watcher = () => {
	gulp.watch('./src/index/*.html', indexConcat).on('all', browserSync.reload);
	gulp.watch('./src/*.html', html).on('all', browserSync.reload);
	gulp.watch('./src/styles/**/*.{sass,scss,css}', css).on('all', browserSync.reload);
	gulp.watch('./src/scripts/**/*.js', js).on('all', browserSync.reload);
	gulp.watch('./src/images/**/*.js', image).on('all', browserSync.reload);
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
gulp.task('deleteIndex', deleteIndex);
gulp.task('indexConcat', indexConcat);
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
	deleteIndex,									// delete smelly old "src/index.html".
	indexConcat,									// then create fresh new "src/index.html" from pieces inside the "./src/index/" subfolder.
	cleanDist,										// then kill the destination folder.
	gulp.parallel(html, css, js, image, fonts),		// then do all these tasks in parallel.
	deleteIndex,									// delete "src/index.html" again (to avoid confusion).
	gulp.parallel(server, watcher)					// then run the local web server and start watching the files for changes.
));

gulp.task('build', gulp.series(
	deleteIndex,									// delete smelly old "src/index.html".
	indexConcat,									// then create fresh new "src/index.html" from pieces inside the "./src/index/" subfolder.
	cleanDist,										// then kill the destination folder.
	gulp.parallel(html, css, js, image, fonts),		// then do all these tasks in parallel.
	deleteIndex										// delete "src/index.html" again (to avoid confusion).
));
