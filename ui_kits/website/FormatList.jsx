/* global React */
function FormatList() {
  const items = [
    { num: 1, title: "Salons", glyph: "*", body: "We convene intimate, cross-disciplinary groups to actively experiment with new gathering formats and rituals. These in-person and virtual salons aren't just discussions about social forms — they're experiences of them, where participants prototype new approaches, document what works, and collectively build a living archive of knowledge." },
    { num: 2, title: "Research", glyph: "◊", body: "We're building a living database of social forms gathered through collective experimentation. Drawing on both traditional academic research and practice-based approaches, we articulate patterns, develop shared language, and document what works as a way to create an open repository of definitions, principles, use cases, and tested approaches that anyone can learn from and build on." },
    { num: 3, title: "Prototyping", glyph: "[]", body: "We support practitioners experimenting with new social forms through small grants and collaborative development. These funded experiments — including rituals, tools, gathering formats, and hybrid spaces — serve as live case studies that the community learns from. Grantees share their findings with the salon, contributing practical insights to our growing database of social forms." },
  ];
  return (
    <ol className="nsfi-format">
      {items.map(it => (
        <li key={it.num} className="nsfi-format__item">
          <span className="nsfi-format__num">{it.num}</span>
          <div className="nsfi-format__body">
            <h3 className="nsfi-format__title">
              {it.title} <span className="nsfi-format__glyph">{it.glyph}</span>
            </h3>
            <p>{it.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
window.FormatList = FormatList;
