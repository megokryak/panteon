// Gruntfile.js

// Вся конфигурация находится внутри этой функции
module.exports = function(grunt) {

  // ===========================================================================
  // Конфигурация GRUNT ===========================================================
  // ===========================================================================

  // ===========================================================================
  // Загружаем модули GRUNT ========================================================
  // ===========================================================================
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.initConfig({

   //Здесь будут указаны модули и их настройки
   less: {
    style: {
      files: {
        "source/css/style.css": "source/less/style.less"
      }
    }
   },
   postcss: {
    style: {
      options: {
        processors: [
          require("autoprefixer")()
        ]
      },
      src: "source/css/*.css"
    }
   },
   watch: {
    style: {
      files: ["source/less/**/*.less"],
      tasks: ["less", "postcss"]
    }
   },
   browserSync: {
    server: {
      bsFiles: {
        src: ["source/*.html", "source/css/*.css"]
      },
      options: {
        server: "sorce/"
      }
    }
   }
  });
};
