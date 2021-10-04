const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const csso = require("gulp-csso");
const rename = require("gulp-rename");

gulp.task("compile", function () {
	return gulp.src("scss/main.scss").pipe(sass()).pipe(gulp.dest("css"));
});

gulp.task("minify", function () {
	return gulp
		.src("./css/main.css")
		.pipe(csso())
		.pipe(rename("main.min.css"))
		.pipe(gulp.dest("./dist"));
});

gulp.task("watch-scss", function () {
	gulp.watch("scss/style.scss", gulp.series("compile"));
});

gulp.task("default", gulp.series("compile", "watch-scss"), function () {});
