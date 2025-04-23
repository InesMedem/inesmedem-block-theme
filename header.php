<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body>
	<header>
	<div class="nav_menu">
		<img src="<?php echo get_template_directory_uri(); ?>/assets/navlogo.svg" alt="Logo">

		<nav>
			<?php
				wp_nav_menu(
					[
						'theme_location' => 'main-menu',
						'menu_class'     => 'nav_list',
						'container'      => false,
					]
				);
				?>

			<div id="theme-switch">
				<div class="circle sun"></div>
				<div class="circle moon"></div>
			</div>
			
			<div><button>Contact</button></div>
		</nav>
	</div>
	</header>
