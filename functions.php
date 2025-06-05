<?php

// * GLOBAL STYLES 
function mytheme_enqueue_styles() {
	wp_enqueue_style(
		'mytheme-style',
		get_stylesheet_uri(),
		array() 
	);
}
add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_styles' );

// * BLOCK REGISTRATION 
function my_theme_register_blocks() {
	register_block_type( block_type: get_template_directory() . '/build/blocks/my-block' );
	register_block_type( block_type: get_template_directory() . '/build/blocks/hero' );
}
add_action( 'init', 'my_theme_register_blocks' );

// * -------------------  function is part of a theme’s setup, ensuring that the theme is compatible 
// * -------------------

function block_theme_setup() {
	add_theme_support( 'editor-styles' ); 
	add_theme_support( 'responsive-embeds' );  
	add_theme_support( 'align-wide' );
}
add_action( 'after_setup_theme', 'block_theme_setup' );


// * ------------------- UPLOAD SVGS //* -------------------

function enable_svg_uploads( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'enable_svg_uploads' );
