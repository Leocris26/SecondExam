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
        grunt.file.copy('src/app/main/maintemplate.html', 'src/app/main/main.component.html', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            condition: config.enablePageTwoLink
                        }
                    }
                );
            }
        });
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

    grunt.registerTask('templateAngular', function() {
        
        grunt.file.copy('a.json', 'angular.json', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            angularfile: config.buildFolder + "/index.html",
                        }
                    }
                );
            }
        });
        
    });

    grunt.registerTask('templatePageOne', function() {
        
        grunt.file.copy('src/app/page1/page1template.ts', 'src/app/page1/page1.component.ts', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            htmlpath: '../../../'+config.buildFolder+'/'+config.pageOneName+'.html'
                        }
                    }
                );
            }
        });
        grunt.file.copy('page1.html', config.buildFolder+'/'+config.pageOneName+'.html', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            title: 'ASDSADA',
                        }
                    }
                );
            }
        });
    });

    grunt.registerTask('templatePageTwo', function() {
        grunt.file.copy('src/app/page2/page2template.ts', 'src/app/page2/page2.component.ts', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            htmlpath: '../../../'+config.buildFolder+'/'+config.pageTwoName+'.html'
                        }
                    }
                );
            }
        });
        grunt.file.copy('page2.html', config.buildFolder+'/'+config.pageTwoName+'.html', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            title: config.freeContent.title,
                            content: config.freeContent.body
                        }
                    }
                );
            }
        });
        
    });
    grunt.registerTask('doALL', ['templateHTML' , 'templatePageOne' , 'templatePageTwo', 'templateAngular'] );
}