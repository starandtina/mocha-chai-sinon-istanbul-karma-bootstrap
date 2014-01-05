'use strict';

var LIVERELOAD_PORT = 35729;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var appConfig = {
        app: 'app',
        test: 'test'
    };

    grunt.initConfig({
        appConfig: appConfig,
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.'),
                            mountFolder(connect, appConfig.test)
                        ];
                    }
                }
            }
        },
        mocha: {
            options: {
                mocha: {
                    ignoreLeaks: false
                },
                reporter: 'Spec',
                run: true,
                timeout: 10000
            },
            test: {
                src: ['<%= appConfig.test %>/index.html']
            }
        },
        karma: {
            options: {
                runnerPort: 9876,
                browsers: ['PhantomJS', 'Chrome'],
            },
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            server: {
                configFile: 'karma.conf.js',
                singleRun: false,
                autoWatch: true
            }
        }
    });

    grunt.registerTask('test', function (target) {
        if (target === 'browser') {
            return grunt.task.run(['open', 'connect:test:keepalive']);
        }

        grunt.task.run(['karma:unit']);
    });

    grunt.registerTask('default', 'test');
};