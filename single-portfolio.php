<?php
/*
Template Name: Post Page
*/

get_header(); 
?>

<main class="site-main">
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
