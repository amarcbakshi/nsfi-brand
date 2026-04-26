/* global React */
function SectionMarker({ glyph, label, id }) {
  return (
    <div className="nsfi-marker" id={id}>
      <span className="nsfi-marker__glyph" aria-hidden="true">{glyph}</span>
      <span className="nsfi-marker__label">{label}</span>
    </div>
  );
}
window.SectionMarker = SectionMarker;
