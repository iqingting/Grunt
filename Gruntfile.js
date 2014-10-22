
'use strict';

module.exports = function(grunt) {
  
  grunt.initConfig({

    // 一些配置
    paths: {
      build: './build',
      src: './src',
    },
    pkg: grunt.file.readJSON('package.json'),

    // 压缩 js，css
    uglify: {
      options: {
        banner: '/* <%= grunt.template.today("yyyy-mm-dd HH:M:ss")%> */'
      },
      target: {
        files: {
          'build/js/app.min.js': ['src/js/app.js'],
          'build/js/common.min.js': ['src/js/common.js']
        }
      }
    },

    // 压缩html
    htmlmin: {
      target: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/index.html': ['src/index.html']
        }
      }
    },

    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['**/*.css'],
        taskes: ['uglify']
      },
      html: {
        files: ['**/*.html'],
        taskes: ['htmlmin']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['uglify','htmlmin']);

};
