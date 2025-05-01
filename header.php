<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body>
	<header>
		<div class="nav__container">
			<a href="<?php echo get_site_url(); ?>"><img src="<?php echo wp_get_attachment_url( 4924 ); ?>" alt="Logo"></a>

			<nav class="nav__list">
				<li> <a href="<?php echo get_site_url() . '/about'; ?>"> About  </a> </li>
				<li> <a href="<?php echo get_site_url() . '/portfolio'; ?>"> Portfolio  </a>  </li>
				<li> <a href="<?php echo get_site_url() . '/blog'; ?>"> Blog  </a>  </li>

				<div id="theme-switch">
					<div class="circle sun"></div>
					<div class="circle moon"></div>
				</div>
				
				<div><button>Contact</button></div>
			</nav>
		</div>
	</header>
