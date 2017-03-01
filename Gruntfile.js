module.exports = function (grunt)
{

  var jsFiles = [
    './node_modules/vue/dist/vue.js',
    './build/vue.js'
  ];

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          'build/vue.js': ['src/app.js']
        },
        options: {
          transform: ['babelify', 'vueify'],
          sourceType: 'module'
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ['./node_modules', './src/less']
        },
        files: {
          'dist/assets/style.css': 'src/less/main.less'
        }
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './dist/assets',
          src: ['*.css', '!*.min.css'],
          dest: './dist/assets',
          ext: '.min.css'
        }]
      }
    },
    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src: jsFiles,
        dest: './dist/scripts.js'
      }
    }
  };

  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('css', ['less', 'cssmin']);
  grunt.registerTask('js', ['browserify', 'concat']);
  grunt.registerTask('default', ['css', 'js']);

};
