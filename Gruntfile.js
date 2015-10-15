module.exports = function(grunt){

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

    watch: {
      files: ['public/css/**/*.css'],
      tasks: ['cssmin']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['cssmin']);
};
