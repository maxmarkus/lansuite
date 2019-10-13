module.exports = function(grunt) {
    grunt.initConfig({
        
       // pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/*.{scss,sass}'],
                tasks: ['sass:dist']
            }
        },
        sass: {
            dist: {
                files: {
                    'css/headshot-custom.css': 'sass/headshot-custom.scss'
                  }
            }
        }
    });
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};