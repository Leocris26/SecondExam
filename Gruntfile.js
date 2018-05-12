module.exports = function (grunt){
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    var config = grunt.file.readJSON(grunt.option('CONFIG') || 'config.json');
    // var build = (grunt.option('BuildFolder') || config.buildFolder);
    grunt.initConfig({
        
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
    grunt.registerTask('doALL', ['concatJS' , 'concatCSS' , 'templateHTML'] );
}