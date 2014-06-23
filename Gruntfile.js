module.exports = function (grunt) {
    grunt.initConfig({
        src: 'src/main/webapp/WebContent',
        jshint: {
            all: ['Gruntfile.js', '<%= src %>/main.js', '<%= src %>/sample-plugin/**/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};