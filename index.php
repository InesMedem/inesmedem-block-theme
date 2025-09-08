<?php
/**
 * Index.php for block theme
 * Required fallback for WordPress.
 */

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<?php
// Header
echo do_blocks( '<!-- wp:template-part {"slug":"header"} /-->' );

// Main content fallback
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        the_content();
    endwhile;
endif;

// Footer
echo do_blocks( '<!-- wp:template-part {"slug":"footer"} /-->' );
?>


<?php wp_footer(); ?>


</body>
</html>

