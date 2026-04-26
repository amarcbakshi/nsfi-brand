/* global React */
function Footer() {
  return (
    <footer className="nsfi-foot">
      <div className="nsfi-foot__top">
        <img className="nsfi-foot__mark" src="../../Logos/SVG/Wordmark_Stacked_white.svg" alt="New Social Forms" />
        <ul className="nsfi-foot__socials">
          <li><a href="#">Instagram ↗</a></li>
          <li><a href="#">LinkedIn ↗</a></li>
        </ul>
      </div>
      <div className="nsfi-foot__bottom">
        <span className="pixel">NEW SOCIAL FORMS · MIT CCC · GOOGLE XI</span>
        <a href="mailto:hello@newsocialforms.org">hello@newsocialforms.org</a>
      </div>
    </footer>
  );
}
window.Footer = Footer;
