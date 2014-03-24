/*
 * grunt-casperjs-plugin
 * https://github.com/rodrigocuriel/grunt-casperjs-plugin
 *
 *
 * based on Ronald lokers plugin
 * https://github.com/ronaldlokers/grunt-casperjs
 *
 * Copyright (c) 2013 Rodrigo Curiel
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      /* options: {
        jshintrc: '.jshintrc',
      },*/
    },

    // Configuration to be run (and then tested).
    casperjs: {
      files: ['test/casperjs.js'],
      options: {
	// Example of using the 'proxy' option. Here is my Cntlm proxy.
	// proxy: '127.0.0.1:3128'
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['casperjs']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
