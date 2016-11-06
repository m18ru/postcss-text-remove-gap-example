var gulp = require( 'gulp' );
var postcss = require( 'gulp-postcss' );
var textRemoveGap = require( 'postcss-text-remove-gap' );
var advancedVariables = require( 'postcss-advanced-variables' );
var nesting = require( 'postcss-nesting' );
var calc = require( 'postcss-calc' );

gulp.task(
	'styles',
	function ()
	{
		var textRemoveGapOptions = {
			prefix: 'm18',
			defaultFontFamily: 'Open Sans'
		};
		
		gulp.src( './styles/src/**/*.css' )
			.pipe( postcss(
				[
					nesting,
					advancedVariables,
					calc,
					textRemoveGap( textRemoveGapOptions )
				]
			) )
			.pipe( gulp.dest( './styles/' ) );
	}
);

gulp.task( 'default', ['styles'] );
