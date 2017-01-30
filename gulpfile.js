// TODO: Use promises instead of timeouts.

var gulp      = require('gulp'),

  // General plugins
  filter      = require('gulp-filter'),
  flatten     = require('gulp-flatten'),
  replace     = require('gulp-replace'),
  concat      = require('gulp-concat'),
  rename      = require('gulp-rename'),
  sourceMaps  = require('gulp-sourcemaps'),
  bower       = require('gulp-main-bower-files'),
  ignore      = require('gulp-ignore'),

  // Css plugins
  cleanCss    = require('gulp-clean-css'),
  prefixer    = require('gulp-autoprefixer'),
  sass        = require('gulp-sass'),

  // JS plugins
  uglify      = require('gulp-uglify'),
  responsive  = require('gulp-responsive'),

  // Browser sync support
  browserSync = require('browser-sync').create();

// Paths being used to get
// and build the related files.
var templatesPath = './**/*.html';
  stylesPath      = './resources/sass/*.scss',
  fontelloPath    = './resources/fonts/fontello/css/fontello.css',
  jsPath          = './resources/js/*.js',
  imagesPath      = './resources/images/*.{jpg,gif,png}',
  imagesBuildPath = './build/resources/images',
  bowerPath       = './bower_components/**/*';

// Builds the images optimized for resolutions.
gulp.task('images', function() {
  var getConfigurations = function(options) {
    return options.map(function(option) {
      return {
        name: '*',
        width: option.width,
        rename: {
          suffix: option.suffix
        },
        grayscale: 1
      }
    });
  }

  gulp.src(imagesPath)
    .pipe(responsive(getConfigurations([{
        width: 480,
        suffix: '-small'
      }, {
        width: 960,
        suffix: '-small-2x'
      }, {
        width: 700,
        suffix: '-medium'
      }, {
        width: 1400,
        suffix: '-medium-2x'
      }, {
        width: 1024,
        suffix: '-large'
      }, {
        width: 2048,
        suffix: '-large-2x'
      }]), {
        quality: 70,
        progressive: true,
        compressionLevel: 6,
        withMetaData: false,
        errorOnEnlargement: false
      }))
    .pipe(gulp.dest(imagesBuildPath));
});

// Builds the app scripts.
gulp.task('scripts', function() {
  gulp.src(jsPath)
    .pipe(sourceMaps.init())
    .pipe(concat('js.all.css'))
    .pipe(ignore.exclude(["**/*.map"]))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('build/js'));
});

// Watches for changes within the scripts.
// If any changes occurred, the scripts are built.
gulp.task('scripts-watch', ['scripts'], function(done) {
  browserSync.reload();
  done();
});

// Builds the scripts added by bower.
gulp.task('bower-scripts', function() {
  var jsGlob    = '**/*.js',
      jsFilter  = filter([jsGlob], {restore: true});

  gulp.src('./bower.json')
    .pipe(bower(jsGlob, {
      overrides: {
        jquery: {
          main: [
            'dist/jquery.min.js'
          ]
        },
        masonry: {
          main: [
            'dist/masonry.pkgd.min.js'
          ],
          ignore: false
        },
        outlayer: {
          ignore: true
        }
      }
    }))
    .pipe(jsFilter)
    .pipe(sourceMaps.init())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(rename('vendor.min.js'))
    .pipe(jsFilter.restore)
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('build/js'))
});

// Builds the app styles, compiling scss files.
gulp.task('styles', function() {
  return gulp.src(stylesPath)
    .pipe(sourceMaps.init())
    .pipe(concat('main.scss'))
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(prefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .on('error', console.log.bind(console))
    .pipe(cleanCss())
    .pipe(rename('main.min.css'))
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('build/styles'))
    .pipe(browserSync.stream());
});

// Builds the styles of any bower dependency.
gulp.task('bower-styles', function() {
  var cssGlob   = '**/*.css',
      cssFilter = filter([cssGlob], {restore: true});

  gulp.src('./bower.json')
    .pipe(bower(cssGlob))
    .pipe(cssFilter)
    .pipe(sourceMaps.init())
    .pipe(concat('vendor.css'))
    .pipe(cleanCss())
    .on('error', console.log.bind(console))
    .pipe(rename('vendor.min.css'))
    .pipe(sourceMaps.write('.'))
    .pipe(cssFilter.restore)
    .pipe(gulp.dest('build/styles'));

  setTimeout(function() {
    gulp.src([fontelloPath, 'build/styles/vendor.min.css'])
      .pipe(sourceMaps.init())
      .pipe(concat('vendor.css'))
      .pipe(cleanCss())
      .on('error', console.log.bind(console))
      .pipe(rename('vendor.min.css'))
      .pipe(sourceMaps.write('.'))
      .pipe(gulp.dest('build/styles'));
  }, 2000);
});

// Shortcut for building the whole app styles
// files by using the main gulp tasks related.
// Replaces the fonts paths within the generated files.
gulp.task('styles-all', ['styles', 'bower-styles', 'fonts'], function() {
  setTimeout(function() {
    gulp.src('build/styles/vendor.min.css')
      .pipe(replace('fonts/', '../fonts/'))
      .pipe(replace('../font/', '../fonts/'))
      .pipe(gulp.dest('build/styles'));
  }, 2500);
});

// Builds each one of the fonts, placing them in the build folder.
gulp.task('fonts', function() {
  var bowerFontsGlob  = 'bower_components/**/fonts/*.{eot,svg,ttf,woff,woff2}',
      vendorFontsGlob = 'resources/fonts/**/*.{eot,svg,ttf,woff,woff2}';

  gulp.src(bowerFontsGlob)
    .pipe(flatten())
    .pipe(gulp.dest('build/fonts'));

  gulp.src(vendorFontsGlob)
    .pipe(flatten())
    .pipe(gulp.dest('build/fonts'));
});

// Watch the bower folder, and if any changes occur,
// it'll run the scripts and all styles tasks.
gulp.task('bower-watch', ['bower-scripts', 'styles-all'], function(done) {
  browserSync.reload();
  done();
});

// Initiates browser sync.
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

// Runs the development environment,
// building the app and running using browser sync.
gulp.task('serve', ['browser-sync', 'styles'], function() {
  gulp.watch(stylesPath, ['styles']);
  gulp.watch(jsPath, ['scripts-watch']);
  gulp.watch(bowerPath, ['bower-watch']);
  gulp.watch(templatesPath).on('change', browserSync.reload);
});
