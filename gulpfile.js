var gulp = require("gulp");
var sass = require("gulp-sass");

var plumber = require("gulp-plumber");
var server = require("browser-sync").create();

gulp.task("style", function() {
  console.log("DONE");
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
