// gulpfile.js
const { watch, series, src, dest } = require("gulp");
var browserSync = require("browser-sync").create();

// Serve from browserSync server
function browsersyncServe(cb) {
    browserSync.init({
        proxy: {
			target: "localhost:8888/venture-code-task/src/example.html",
		},
    });
    cb();
}

function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

// Watch Files & Reload browser after tasks
function watchTask() {
    watch("./src/*.html", browsersyncReload);
    watch(["./src/*.css"], series(browsersyncReload));
}

// Default Gulp Task
exports.default = series(browsersyncServe, watchTask);