<?php

function mytheme_enqueue_assets() {
	wp_enqueue_style(
		'mytheme-style',
		get_template_directory_uri() . '/build/style-index.css',
		[],
		filemtime( get_template_directory() . '/build/style-index.css' )
	);

	wp_enqueue_style( 'main-style', get_stylesheet_uri() ); // if you want to keep style.css

	wp_enqueue_script(
		'mytheme-scripts',
		get_template_directory_uri() . '/build/index.js',
		[],
		filemtime( get_template_directory() . '/build/index.js' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_assets' );


// * ------------------- UPLOAD SVGS //* -------------------

function enable_svg_uploads( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'enable_svg_uploads' );

// * ------------------- BLOCKS //* -------------------
