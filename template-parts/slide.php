<div class="card">
	<?php if ( has_post_thumbnail() ) : ?>
	<img class="card-img" src="<?php the_post_thumbnail_url( 'medium' ); ?>" alt="<?php the_title_attribute(); ?>">
	<?php endif; ?>

	<div class="title-btn">
	<span><h3 class="sub-title"><?php the_title(); ?></h3></span>
	<img class="arrow-btn" src="<?php echo get_template_directory_uri(); ?>/assets/arrow_right.svg" alt="Arrow">
	</div>
</div>
