module.exports = function (grunt)
{

  var jsFiles = [
    './node_modules/vue/dist/vue.min.js',
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
        dest: './dist/assets/scripts.js'
      }
    },
    copy: {
      main: {
        files: [
          {
            src: './src/index.html',
            dest: './dist/index.html'
          },
          {
            expand: true,
            cwd: './src',
            src: ['./data/**'],
            dest: './dist/'
          }
        ]
      }
    },
    watch: {
      scripts: {
        files: ['./src/**/*.js', './src/**/*.vue'],
        tasks: ['js'],
        options: {
          spawn: false,
        },
      },
      static: {
        files: ['./src/data/*', './src/index.html', './src/assets/*'],
        tasks: ['static'],
        options: {
          spawn: false,
        },
      },
      styles: {
        files: ['./src/**/*.less'],
        tasks: ['css'],
        options: {
          spawn: false,
        },
      },
    },
  };

  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('css', ['less', 'cssmin']);
  grunt.registerTask('js', ['browserify', 'concat']);
  grunt.registerTask('static', ['copy']);
  grunt.registerTask('default', ['css', 'js', 'static']);

};
