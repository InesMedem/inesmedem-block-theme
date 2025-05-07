<?php

function mytheme_enqueue_assets() {

	$asset_path = get_template_directory_uri() . '/build';

	wp_enqueue_style(
		'mytheme-style',
		$asset_path . '/style-index.css',
		[],
		filemtime( get_template_directory() . '/build/style-index.css' )
	);

	// wp_enqueue_script(
	// 'mytheme-scripts',
	// $asset_path . '/build/index.js',
	// [],
	// filemtime( get_template_directory() . '/build/index.js' ),
	// true
	// );
}
add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_assets' );


// * ------------------- Register blocks and enqueue related assets //* -------------------

function inesmedem_register_theme_blocks() {
	$asset_path = get_template_directory_uri() . '/build';

	// Register block script
	wp_register_script(
		'theme-blocks',
		$asset_path . '/index.js',
		[ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n' ],
		filemtime( get_template_directory() . '/build/index.js' ),
		true
	);

	wp_register_style(
		'theme-blocks',
		$asset_path . '/style-index.css',
		[],
		filemtime( get_template_directory() . '/build/style-index.css' )
	);

	foreach ( glob( get_template_directory() . '/src/blocks/*/block.json' ) as $block ) {
		register_block_type( $block );
	}
}
add_action( 'init', 'inesmedem_register_theme_blocks' );


// * ------------------- UPLOAD SVGS //* -------------------

function enable_svg_uploads( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'enable_svg_uploads' );
