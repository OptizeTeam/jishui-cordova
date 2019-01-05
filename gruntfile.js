var sass = require('node-sass');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: 'sources/fonts',
						src: '**',
						dest: 'www/fonts'
					},
					{
						expand: true,
						cwd: 'sources/images',
						src: '**',
						dest: 'www/images'
					},
					{
						expand: true,
						cwd: 'sources/scripts',
						src: '**',
						dest: 'www/scripts'
					},
					{
						expand: true,
						cwd: 'sources/styles',
						src: '**/*.css',
						dest: 'www/styles'
					}
				]
			}
		},
		pug: {
			compile: {
				options: {
					pretty: true
				},
				files: [{
					src: ['**/*.pug', '!**/_*.pug'],
					dest: "www/",
					ext: ".html",
					cwd: "sources/views/",
					expand: true
				}]
			}
		},
		sass: {
			options: {
				implementation: sass
			},
			dist: {
				options: {
					outputStyle: 'compressed',
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: 'sources/styles/',
					src: ['**/*.sass'],
					dest: 'www/styles/',
					ext: '.css',
					extDot: 'last'
				}]
			}
		},
		watch: {
			css: {
				files: 'sources/styles/**/*.css',
				tasks: ['copy']
			},
			fonts: {
				files: 'sources/fonts/**/*',
				tasks: ['copy']
			},
			images: {
				files: 'sources/images/**/*',
				tasks: ['copy']
			},
			sass: {
				files: 'sources/styles/**/*.sass',
				tasks: ['sass']
			},
			scripts: {
				files: 'sources/scripts/**/*.js',
				tasks: ['copy']
			},
			views: {
				files: 'sources/views/**/*.pug',
				tasks: ['pug']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['copy', 'pug', 'sass']);
};
