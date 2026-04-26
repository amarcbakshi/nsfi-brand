/* global React */
const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);
  return (
    <header className={"nsfi-nav" + (scrolled ? " is-scrolled" : "")}>
      <a className="nsfi-nav__brand" href="#top" aria-label="New Social Forms">
        <img src="../../Logos/SVG/Wordmark_Monogram_black.svg" alt="" />
        <span className="nsfi-nav__brand-text">
          <span className="nsfi-nav__brand-mark">nSFi</span>
          <span className="nsfi-nav__brand-full">New Social Forms</span>
        </span>
      </a>
      <nav className="nsfi-nav__items">
        <a className="btn btn--primary" href="#contact">Join the Salon Series</a>
        <a className="nsfi-nav__link" href="#about">@About</a>
      </nav>
    </header>
  );
}

window.Nav = Nav;
