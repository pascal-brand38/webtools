// Copyright (c) Pascal Brand
// MIT License

const gulp = require('gulp');
const gulprename = require("gulp-rename");
const { preproc } = require('./preproc')

function buildHtmlTask(args, cb) {
  const src = args.siteRootdir + '/src/hbs/*.hbs'
  const dst = args.siteRootdir + '/' + args.relativeDst
  return gulp.src(src)
    .pipe(preproc(args))
    .pipe(gulprename(function (path) {
      // Updates the object in-place
      //path.dirname += "/ciao";
      //path.basename += "-goodbye";
      path.extname = ".html";
    }))
    .pipe(gulp.dest(dst))
}

function buildHtml(args, cb) {
  return buildHtmlTask(args, cb)
}

exports.buildHtml = buildHtml