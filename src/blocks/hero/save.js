const { useBlockProps, RichText } = wp.blockEditor;

export default function save({ attributes }) {
	const { heroText } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<section className="hero">
				<div className="hero_text-wrapper">
					<h3 className="sub-title--yellow">Welcome dear friend,</h3>
					<h1 className="hero_title">
						Web Development Solutions
						<img
							className="hero_star"
							src="http://blocks.test/wp-content/uploads/2024/05/Vector.svg"
							alt="hero_star"
						/>
					</h1>
					<RichText.Content
						tagName="p"
						className="hero_text"
						value={heroText}
					/>
					<div className="hero_btn">
						<a className="button" href="#">Get in touch</a>
					</div>
				</div>
				<div className="hero__img-wrapper">
					<div>
						<img
							className="hero_headshot hover-image levitate-image"
							src="http://blocks.test/wp-content/uploads/2025/05/ines-medem-1.png"
							alt="hero_headshot"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
