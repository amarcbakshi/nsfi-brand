/* global React */
function SalonTopics() {
  const topics = [
    { num: 1, title: "Decisionmaking spaces", body: "How are democratic publics being reimagined through experimental architectures?" },
    { num: 2, title: "Artworld spaces", body: "How can art function as a laboratory for alternative social contracts?" },
    { num: 3, title: "Therapeutic spaces", body: "How are therapeutic practices being reconfigured?" },
    { num: 4, title: "Digital Life spaces", body: "How are new architectures of online connection being imagined and tested?" },
    { num: 5, title: "Enterprise spaces", body: "How do corporations engineer spaces of meaning, cohesion, and trust under conditions of distributed work and automation?" },
    { num: 6, title: "Religious spaces", body: "How are religious gatherings evolving as sites of collective meaning, ritual innovation, and interfaith dialogue?" },
  ];
  return (
    <div className="nsfi-topics">
      <h4 className="nsfi-topics__head">Future Session Topics</h4>
      <ol className="nsfi-topics__grid">
        {topics.map(t => (
          <li key={t.num} className="nsfi-topics__item">
            <span className="nsfi-topics__num">{t.num}</span>
            <h5 className="nsfi-topics__title">{t.title}</h5>
            <p className="nsfi-topics__body">{t.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
window.SalonTopics = SalonTopics;
