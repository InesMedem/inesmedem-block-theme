<?php
/* Template Name: Custom Front Page */
get_header();
?>

<main>
	
	<section class="hero">
		<div class="hero_text-wrapper">
			<h3 class="sub-title--yellow">Welcome dear friend,</h3>
			<h1 class="hero_title">Web Development Solutions <img class="hero_star" src="<?php echo wp_get_attachment_url( 4925 ); ?>"></h1>			<p class="hero_text">Creating responsive, user-friendly websites that elevate your online presence. I help startups, small businesses, and entrepreneurs engage their audience and drive growth with expert web development and design.</p>
			<div class="hero_btn"><button> <a href="#">Get in touch</a></button></div>
		</div class="hero__img-wrapper">
			<div>  <img class="hero_headshot hover-image levitate-image" src="<?php echo wp_get_attachment_url( 4915 ); ?>">
</div>
	</section>

	<section>

	</section>
	<!-- <section>
			<div class="loading"> 
		</div>
	</section> -->

<!-- <section class="destinations-grid">
	<div class="destinations-grid_text">
		<h3 class="big-title"> 
			<img class="hero-star" src="<?php echo wp_get_attachment_url( 4925 ); ?>"> Digital Nomad  
		</h3>
		<p class="hero-text">Creating responsive, user-friendly websites that elevate your online presence. </p>
		<div><button>click here </button></div>
	</div>        

	<div class="grid">
		<img src="/assets/salvador.png">
		<img src="/assets/mexico.png">
		<img src="/assets/bali.png">    
		<img src="/assets/nicaragua.png">
	</div>
	
	<img src="/assets/madrid.png">

	<div class="grid">
		<img src="/assets/berlin.png">
		<img src="/assets/sydney.png">
	</div>

	
</section> -->

<section class="portfolio-carousel">
	<div class="portfolio-slider">
	<?php
	$portfolio_query = new WP_Query(
		[
			'post_type'      => 'portfolio', // or your custom type, e.g. 'project'
			'posts_per_page' => 3,
		]
	);

	if ( $portfolio_query->have_posts() ) :
		while ( $portfolio_query->have_posts() ) :
			$portfolio_query->the_post();
			get_template_part( 'template-parts/slide' );
		endwhile;
		wp_reset_postdata();
	else :
		echo '<p>No projects found.</p>';
	endif;
	?>
	</div>
</section>

<section class="blog-grid">
<div class="grid-card__wrapper">

	<?php
		$blog_query = new WP_Query(
			[
				'post_type'      => 'post',
				'posts_per_page' => 1,
			]
		);

		if ( $blog_query->have_posts() ) :
			while ( $blog_query->have_posts() ) :
				$blog_query->the_post();
				get_template_part( 'template-parts/card', 'grid' );
			endwhile;
			wp_reset_postdata();
		else :
			echo '<p>No blog posts found.</p>';
		endif;
		?>

</div>
</section>


</main>

<?php get_footer(); ?>
