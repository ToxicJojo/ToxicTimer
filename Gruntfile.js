module.exports = function(grunt) {

  grunt.initConfig({
    pgk: grunt.file.readJSON('package.json'),

    cssmin: {
      minify: {
        expand: true,
        cwd: 'public/css/',
        src: ['*.css'],
        dest: 'public/build/css/'
      }
    },
    browserify: {
      'public/build/javascript/timerInit.js': ['public/javascript/timer/timerInit.js'],
    },
    watch: {
      files: ['public/css/**/*.css', 'public/javascript/**/*.js'],
      tasks: ['cssmin', 'browserify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['cssmin', 'browserify']);
};
