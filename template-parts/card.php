<div class="grid-card">

	
	<div class="grid-card__img">
		<?php if ( has_post_thumbnail() ) : ?>
		<img src="<?php the_post_thumbnail_url( 'medium' ); ?>" alt="<?php the_title_attribute(); ?>">
		<?php endif; ?>
	</div>

	<div class="grid-card__text-container">
	  
		<div class="grid-card__links">
		<p class="yellow"><b><?php echo get_the_date( 'd/m/Y' ); ?></b></p>

		<?php
		$category = get_the_category();
		if ( ! empty( $category ) ) :
			?>
			<a href="<?php echo esc_url( get_category_link( $category[0]->term_id ) ); ?>" class="link">
			<?php echo esc_html( $category[0]->name ); ?>
			</a>
		<?php endif; ?>
		</div>

		<div class="grid-card__text">
		<h3><?php the_title(); ?></h3>
		<p><?php echo get_the_excerpt(); ?></p>
		<a href="<?php the_permalink(); ?>" class="link">Read More</a>
		</div>



	</div>
</div>
