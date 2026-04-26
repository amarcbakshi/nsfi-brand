/* global React */
const { useState: useStateCF } = React;

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [v, setV] = useState({ name: "", email: "", phone: "", site: "", msg: "", interests: false });
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };
  if (sent) {
    return (
      <div className="nsfi-form nsfi-form--sent">
        <p className="pixel">SENT · WE'LL BE IN TOUCH</p>
        <h3>Thank you, {v.name || "friend"}.</h3>
        <p>You've joined the salon series mailing list.</p>
        <button className="btn btn--ghost" onClick={() => { setSent(false); setV({ name: "", email: "", phone: "", site: "", msg: "", interests: false }); }}>Start over</button>
      </div>
    );
  }
  return (
    <form className="nsfi-form" onSubmit={onSubmit}>
      <h3 className="nsfi-form__head">Join us in Exploring and Piloting New Social Forms</h3>
      <p className="nsfi-form__lede">Are you hosting gatherings, researching connection, or designing new social tools? Do you want to participate in our salons, research or prototyping work? We'd love to hear from you.</p>
      <p className="nsfi-form__honey pixel">Don't fill this out if you are a human:</p>
      <input type="text" tabIndex="-1" autoComplete="off" className="nsfi-form__honeyfield" aria-hidden="true" />

      <div className="nsfi-form__row">
        <label className="nsfi-form__check">
          <input type="checkbox" checked={v.interests} onChange={set("interests")} />
          <span className="nsfi-form__box" aria-hidden="true"></span>
          Yes! Please call me
        </label>
      </div>

      <div className="nsfi-form__row">
        <label className="nsfi-form__field">
          <span>First Name *</span>
          <input required value={v.name} onChange={set("name")} placeholder="Jordan" />
        </label>
        <label className="nsfi-form__field">
          <span>Email Address *</span>
          <input required type="email" value={v.email} onChange={set("email")} placeholder="jordan@studio.org" />
        </label>
      </div>
      <div className="nsfi-form__row">
        <label className="nsfi-form__field">
          <span>Phone</span>
          <input value={v.phone} onChange={set("phone")} placeholder="(optional)" />
        </label>
        <label className="nsfi-form__field">
          <span>Website</span>
          <input value={v.site} onChange={set("site")} placeholder="(optional)" />
        </label>
      </div>
      <label className="nsfi-form__field">
        <span>Message *</span>
        <textarea required rows="3" value={v.msg} onChange={set("msg")} placeholder="I'd love to learn more about NSF — especially your salon series." />
      </label>
      <button type="submit" className="btn btn--primary">Send →</button>
    </form>
  );
}
window.ContactForm = ContactForm;
