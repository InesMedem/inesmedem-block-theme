const { useBlockProps } = wp.blockEditor;

export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<section className="hero">
				<div className="hero_text-wrapper">
					<h3 className="sub-title--yellow">Welcome dear friend,</h3>
					<h1 className="hero_title">
						Web Development Solutions{' '}
						<img
							className="hero_star"
							src="http://blocks.test/wp-content/uploads/2024/05/Vector.svg"
							alt="alt-text"
						/>
					</h1>
					<p className="hero_text">
						Creating responsive, user-friendly websites that elevate
						your online presence. I help startups, small businesses,
						and entrepreneurs engage their audience and drive growth
						with expert web development and design.
					</p>
					<div className="hero_btn">
						<button>
							<a href="#">Get in touch</a>
						</button>
					</div>
				</div>
				<div className="hero__img-wrapper">
					<div>
						<img
							className="hero_headshot hover-image levitate-image"
							src="http://blocks.test/wp-content/uploads/2025/05/ines-medem-1.png"
							alt="alt-text"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
