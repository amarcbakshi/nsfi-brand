/* global React */
function Hero() {
  const glyphs = ["✓", "🐕", "$", "⌣", "#", "*"];
  return (
    <section className="nsfi-hero" id="top">
      <div className="nsfi-hero__inner">
        <p className="nsfi-hero__intro pixel">
          THIS WEBSITE CONNECTS VISITORS BY SHARING CURSORS.<br/>
          THERE ARE CURRENTLY <span className="nsfi-hero__count">0</span> OTHER VISITORS.
        </p>
        <h1 className="nsfi-hero__headline">
          (Re)Designing the Social Architectures of Human Connection
        </h1>
        <p className="nsfi-hero__lede">
          New Social Forms brings together artists, technologists, researchers, and civic actors to explore, prototype, and scale the social architectures that strengthen connection and collective agency in a time of rapid technological and cultural change.
        </p>
        <ul className="nsfi-hero__glyphs" aria-hidden="true">
          {glyphs.map((g, i) => <li key={i} className={i % 2 ? "" : "is-green"}>{g}</li>)}
        </ul>
      </div>
      <figure className="nsfi-hero__figure">
        <div className="nsfi-hero__image" role="img" aria-label="A circle of metal chairs in a brightly lit meeting room">
          <span className="pixel">[ chair-circle.jpg ]</span>
        </div>
        <figcaption className="nsfi-hero__caption">
          New Social Forms is an initiative of the MIT Center for Constructive Communication at the MIT Media Lab, made possible by Google Xi.
          <span className="nsfi-hero__partners">
            <span>MIT Center for Constructive Communication</span>
            <span>Google Experience Institute</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
window.Hero = Hero;
