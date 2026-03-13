import ContactForm from "../components/ContactForm";

const Contact = () => (
  <section className="contact" id="kontakt">
    <div className="container contact-grid">
      <div className="contact-info" data-reveal>
        <div className="contact-brand">
          <h2>Kontakt</h2>
        </div>
        <div className="contact-chips" aria-label="Typ zásahu">
          <span>Požiar</span>
          <span>Povodeň</span>
          <span>Sadzové čistenie</span>
          <span>Odvlhčenie</span>
        </div>
        <div className="contact-details">
          <div>
            <span>Telefonicky</span>
            <strong>+421 901 234 567</strong>
          </div>
          <div>
            <span>Email</span>
            <strong>info@sadze.sk</strong>
          </div>
          <div>
            <span>Dispečing</span>
            <strong>Okamžitý zásah</strong>
          </div>
        </div>
      </div>
      <div data-reveal>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
