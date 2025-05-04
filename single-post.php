<?php
/*
Template Name: Post Page
*/

get_header(); 
?>


<main class="site-main">
<section><h1><?php the_title(); ?> </h1></section>

<?php
while ( have_posts() ) :
	the_post();
	?>
		<article <?php post_class(); ?>>
			<?php the_content(); ?>
		</article>
	<?php endwhile; ?>
</main>

<?php get_footer(); ?>

<?php get_footer(); ?>
