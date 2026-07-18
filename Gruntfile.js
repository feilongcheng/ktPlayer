const sass = require('sass');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                stripBanners: true,
                banner: '/* ktPlayer by Felix */\n'
            },
            build: {
                src: './src/ktPlayer.js',
                dest: './dist/ktPlayer.min.js'
            }
        },

        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: './src',
                    src: ['*.scss'],
                    dest: './dist',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['uglify', 'sass']);
};