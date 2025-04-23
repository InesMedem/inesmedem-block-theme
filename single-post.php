<?php
/*
Template Name: Post Page
*/

get_header(); 
?>

<main class="site-main">
	<h1>Single Post</h1>
	<?php
	while ( have_posts() ) :
		the_post();
		the_content();
	endwhile;
	?>
</main>

<?php get_footer(); ?>
