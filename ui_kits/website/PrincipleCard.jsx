/* global React */
function PrincipleCard({ imageLabel, imageBg, caption, title, body }) {
  return (
    <article className="nsfi-principle">
      <div className="nsfi-principle__image" style={imageBg ? { background: imageBg } : null} role="img" aria-label={imageLabel}>
        <span className="pixel">[ {imageLabel} ]</span>
      </div>
      <p className="nsfi-principle__caption">{caption}</p>
      <h3 className="nsfi-principle__title">{title}</h3>
      <div className="nsfi-principle__eyebrow">
        <span className="nsfi-marker__glyph">‡</span>
        <span>Principles</span>
      </div>
      <p className="nsfi-principle__body">{body}</p>
    </article>
  );
}
window.PrincipleCard = PrincipleCard;
