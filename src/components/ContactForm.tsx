import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_IS_CONFIGURED,
} from "../config/emailjs";

type StatusTone = "idle" | "sending" | "success" | "error";

type StatusState = {
  message: string;
  tone: StatusTone;
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<StatusState>({
    message: "",
    tone: "idle",
  });

  useEffect(() => {
    if (EMAILJS_IS_CONFIGURED) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAILJS_IS_CONFIGURED) {
      setStatus({
        message: "EmailJS ešte nie je nastavené. Doplňte údaje v src/config/emailjs.ts.",
        tone: "error",
      });
      return;
    }

    if (!formRef.current) {
      return;
    }

    setStatus({ message: "Odosielam...", tone: "sending" });

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current);
      setStatus({
        message: "Správa bola úspešne odoslaná. Ozveme sa čoskoro.",
        tone: "success",
      });
      formRef.current.reset();
    } catch (error) {
      setStatus({
        message: "Odoslanie zlyhalo. Skontrolujte nastavenie EmailJS alebo skúste znova.",
        tone: "error",
      });
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <form className="contact-form" id="contact-form" ref={formRef} onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Meno a priezvisko
          <input type="text" name="from_name" placeholder="Vaše meno" required />
        </label>
        <label>
          Telefón
          <input type="tel" name="phone" placeholder="+421" required />
        </label>
        <label>
          Email
          <input type="email" name="from_email" placeholder="vas@email.sk" required />
        </label>
        <label>
          Mesto / lokalita
          <input type="text" name="location" placeholder="Bratislava" required />
        </label>
      </div>
      <label>
        Popis situácie
        <textarea
          name="message"
          rows={5}
          placeholder="Stručne opíšte, čo sa stalo a v akom je to stave..."
          required></textarea>
      </label>
      <div className="form-actions">
        <button className="button" type="submit">
          Odoslať dopyt
        </button>
        <span>Odpovedáme zvyčajne do 2 hodín.</span>
      </div>
      <p className="form-note">
        Formulár je napojený na EmailJS. Doplňte `EMAILJS_SERVICE_ID`,
        `EMAILJS_TEMPLATE_ID` a `EMAILJS_PUBLIC_KEY` v súbore
        `src/config/emailjs.ts`.
      </p>
      {status.message && (
        <div className={`form-status tone-${status.tone}`} role="status" aria-live="polite">
          {status.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
