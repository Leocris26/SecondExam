module.exports = function (grunt){
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    var config;
    try {
        config = grunt.file.readJSON(grunt.option('CONFIG'));
    } catch (error) {
        config = grunt.file.readJSON('config.json');
    }
    // var build = (grunt.option('BuildFolder') || config.buildFolder);

    grunt.initConfig({
        jasmine: {
          JS: {
            options: {
              specs: 'spec/*.spec.js'
            }
          }
        }
      });

    grunt.registerTask('templateHTML', function() {
        
        grunt.file.copy('index.html', config.buildFolder+'/index.html', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            pageTitle: config.appName,
                        }
                    }
                );
            }
        });
        
    });

    grunt.registerTask('templatePageOne', function() {
        
        grunt.file.copy('page1.html', config.buildFolder+'/'+config.pageOneName+'.html', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            pageTitle: config.appName,
                        }
                    }
                );
            }
        });
        
    });

    grunt.registerTask('templatePageTwo', function() {
        
        grunt.file.copy('page2.html', config.buildFolder+'/'+config.pageTwoName+'.html', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            pageTitle: config.appName,
                        }
                    }
                );
            }
        });
        
    });
    grunt.registerTask('doALL', ['templateHTML' , 'templatePageOne' , 'templatePageTwo', 'jasmine'] );
}