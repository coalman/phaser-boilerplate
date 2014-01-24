phaser-boilerplate
==================

Dependencies
------------

This boilerplate uses [gulp.js]. You will need to first install [node.js] before installing gulp.js. Follow [these steps][gulp.js install] to install gulp.js once you have node.js setup.

[node.js]: http://nodejs.org/
[gulp.js]: http://gulpjs.com/
[gulp.js install]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

Getting Started
---------------

To get started, open up a terminal and navigate to the boilerplate directory. Then enter the following command to:

    $ gulp

This will build the files in the `app` folder and place them in a `dist` folder. It will then start up a local preview server using express.js and a livereload server. After the livereload server is ready, your browser will open up the `index.html` page located in `dist`.

Currently, the build only minifies your `png` files, copies your html files, and copies over your javascript files. However, [gulp.js] has many plugins and this build process can be enhanced to meet your needs.

Project Layout
--------------

    |-app           // your source files go here
    	|-img         // images go here
    	|-js          // javascript files go here
    	|-index.html  // base html file for your app
    |-dist          // generated from running 'gulp build'
    	|-img         // minified images are placed here
    	|-js          // built javascript files are placed here
    	|-lib         // any libraries needed are placed here
    		|-phaser.min.js  // copied from the 'lib/phaser' directory
    	|-index.html  // placed here by gulp
    |-lib           // put any third-party libraries here
    	|-phaser    // git submodule that is linked directly to the phaser github repo.
    |-node_modules  // directory that will be created after running 'npm install'
    |-gulpfile.js   // defines the different gulp tasks
    |-package.json  // defines node dependencies, primarily used for gulp build system at the moment
    |-preview.js    // little node script that starts a local preview server.
    |-history.md    // changelog
    |-readme.md     // thing you are reading

Build System
------------

This boilerplate uses a [gulp.js] to perform tasks and builds. There are essentially three commands built in to our `gulpfile.js`:

    $ gulp          // default task, runs the build then preview task
    $ gulp build
    $ gulp preview

The `build` task currently lints your javascript files with jshint, minifies all png images, and copies javascript/html/png files to the `dist` directory. This is useful if you just want to build the project.

The `preview` task currently starts a livereload and local preview server (on ports 35729 and 3000 respectively). This is good if you don't want to build the project and just want to preview your current game.