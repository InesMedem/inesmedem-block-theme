<div class="card">
	<?php if ( has_post_thumbnail() ) : ?>
	<img class="card-img" src="<?php the_post_thumbnail_url( 'large' ); ?>" alt="<?php the_title_attribute(); ?>">
	<?php endif; ?>

	<div class="title-btn">
	<span><h5 class=""><?php the_title(); ?></h5></span>
	
	<img src="<?php echo wp_get_attachment_url( 3649 ); ?>">

	</div>
</div>
