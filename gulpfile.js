// gulpfile.js
const { watch, series, src } = require("gulp");
var browserSync = require("browser-sync").create();

const { exec } = require('child_process');
function execute(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${command}`);
            console.error(error);
            return;
        }

    console.log(`Command executed successfully: ${command}`);
    console.log('Output:', stdout);
    console.error('Errors:', stderr);
    });
}

// Serve from browserSync server
function browsersyncServe(cb) {
    browserSync.init({
        proxy: {    // your environment directory here...
			target: "localhost/...",
		},
    });
    cb();
}

function browsersyncReload(cb) {
    execute('npm run build-css');
    browserSync.reload();
    cb();
}

// Watch Files & Reload browser after tasks
function watchTask() {
    watch("./src/*.php", browsersyncReload);
    watch("./src/templates/*.php", browsersyncReload);
    watch(["./src/*.js"], series(browsersyncReload));
}

// Default Gulp Task
exports.default = series(browsersyncServe, watchTask);