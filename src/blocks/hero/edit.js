const { __ } = wp.i18n;
const { useBlockProps } = wp.blockEditor;

export default function Edit() {
  return <div {...useBlockProps()}>
          <section className="hero">
        <div className="hero_text-wrapper">
          <h3 className="sub-title--yellow">Welcome dear friend,</h3>
          <h1 className="hero_title">
            Web Development Solutions <img className="hero_star" src={blockData.star_image_url} />
          </h1>
          <p className="hero_text">
            Creating responsive, user-friendly websites that elevate your online presence. I help startups, small businesses, and entrepreneurs engage their audience and drive growth with expert web development and design.
          </p>
          <div className="hero_btn"><button><a href="#">Get in touch</a></button></div>
        </div>
        <div className="hero__img-wrapper">
          <div>
            <img className="hero_headshot hover-image levitate-image" src={blockData.hero_image_url} />
          </div>
        </div>
      </section>
  </div>;
}
