<?php get_header(); ?>

<main class="site-main">
	<section class="archive-content">

	<?php if ( have_posts() ) : ?>

		<header class="archive-header">
		<h1 class="archive-title"><?php the_archive_title(); ?></h1>
		<?php the_archive_description(); ?>
		</header>

		<div class="archive-posts">
		<?php
		while ( have_posts() ) :
			the_post();
			?>
			<?php get_template_part( 'template-parts/card', get_post_type() ); ?>
		<?php endwhile; ?>
		</div>

		<?php the_posts_navigation(); ?>

	<?php else : ?>
		<p>No posts found.</p>
	<?php endif; ?>

	</section>
</main>

<?php get_footer(); ?>
