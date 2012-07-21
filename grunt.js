module.exports = function(grunt) {
    grunt.initConfig({
        pkg: '<json:package.json>',
        lint: {
            files: ['grunt.js', 'client/**/*.js']
        },

        concat: {
            debug: {
                src: ['client/**/*.js'],
                dest: 'public/js/app.debug.js'
            }
        },

        watch: {
            files: '<config:lint.files>',
            tasks: 'default'
        }
    });

    grunt.registerTask('default', 'lint concat');
};
