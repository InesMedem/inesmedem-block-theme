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

// function mytheme_enqueue_assets() {

// $asset_path = get_template_directory_uri() . '/build';

// wp_enqueue_style(
// 'mytheme-style',
// $asset_path . '/style-index.css',
// [],
// filemtime( get_template_directory() . '/build/style-index.css' )
// );
// }
// add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_assets' );


// * ------------------- Register blocks and enqueue related assets //* -------------------


// function inesmedem_register_theme_blocks() {
// $asset_path = get_template_directory_uri() . '/build';

// Register block script
// wp_register_script(
// 'theme-blocks',
// $asset_path . '/index.js',
// [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n' ],
// filemtime( get_template_directory() . '/build/index.js' ),
// true
// );

// wp_register_style(
// 'theme-blocks',
// $asset_path . '/style-index.css',
// [],
// filemtime( get_template_directory() . '/build/style-index.css' )
// );

// foreach ( glob( get_template_directory() . '/src/blocks/*/block.json' ) as $block ) {
// register_block_type(
// $block,
// [
// [
// 'editor_style' => 'theme-blocks',  // Make sure the block styles are applied in the editor
// 'style'        => 'theme-blocks',          // Apply the same styles to the front-end
// ],
// ] 
// );
// }
// }
// add_action( 'init', 'inesmedem_register_theme_blocks' );

// * -------------------  function is part of a theme’s setup, ensuring that the theme is compatible 
// with the block editor and offers a good editing experience, as well as helping ensure 
// the block styles match the front-end experience.
// * -------------------

function block_theme_setup() {
	// Add support for various features
	add_theme_support( 'editor-styles' ); 
	add_theme_support( 'responsive-embeds' );  
	add_theme_support( 'align-wide' );

	// Enqueue the editor styles
	// add_editor_style( 'editor-style.css' );  
}
add_action( 'after_setup_theme', 'block_theme_setup' );



// * ------------------- UPLOAD SVGS //* -------------------

function enable_svg_uploads( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'enable_svg_uploads' );
