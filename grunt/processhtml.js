module.exports = {

  dev: {
    options: {
      strip: true
    },
    files: [{expand: true, cwd: 'src/views/', src: ['*.html'], dest: '.tmp/', ext: '.html'}]
  },

  build: {
    options: {
      strip: true
    },
    files: [{expand: true, cwd: 'src/views/', src: ['*.html'], dest: 'dist/', ext: '.html'}]
  }
};
