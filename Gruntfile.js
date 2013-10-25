module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'build/js/custom.js',
        dest: 'htdocs/assets/js/custom.min.js'
      }
    },
    less: {
            development: {
                options: {
                    paths: ["build/less"]
                },
                files: {
                    "htdocs/assets/css/style.css": "build/less/main.less"
                }
            }
        },
        watch: {
            files: "build/less/*",
            tasks: ["less"]
        }
  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};