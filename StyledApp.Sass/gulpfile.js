var gulp = require("gulp"),
    sass = require("gulp-sass");

sass.compiler = require('node-sass');

gulp.task("Build App File", function () {
    return gulp.src("app.scss")
        .pipe(sass())
        .pipe(gulp.dest("../StyledApp-Xamarin-Sass/StyledApp-Xamarin-Sass/Styles"));
});

gulp.task("Build Items Page File", function () {
    return gulp.src("itemsPage.scss")
        .pipe(sass())
        .pipe(gulp.dest("../StyledApp-Xamarin-Sass/StyledApp-Xamarin-Sass/Styles"));
});

gulp.task("Build Item Detail Page File", function () {
    return gulp.src("itemDetailPage.scss")
        .pipe(sass())
        .pipe(gulp.dest("../StyledApp-Xamarin-Sass/StyledApp-Xamarin-Sass/Styles"));
});

gulp.task("default", gulp.parallel(
    "Build App File",
    "Build Items Page File",
    "Build Item Detail Page File"
)); 