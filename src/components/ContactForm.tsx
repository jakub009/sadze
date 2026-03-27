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
  const successTimerRef = useRef<number | null>(null);
  const [insurerName, setInsurerName] = useState("");
  const [claimNumber, setClaimNumber] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [status, setStatus] = useState<StatusState>({
    message: "",
    tone: "idle",
  });
  const claimNumberRequired = Boolean(insurerName.trim());
  const requiredMark = (
    <>
      <span className="required-asterisk" aria-hidden="true">
        *
      </span>
      <span className="sr-only"> (povinné)</span>
    </>
  );

  useEffect(() => {
    if (EMAILJS_IS_CONFIGURED) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  }, []);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

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

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setStatus({ message: "Odosielam...", tone: "sending" });

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current);
      setStatus({ message: "", tone: "success" });
      formRef.current.reset();
      setInsurerName("");
      setClaimNumber("");
      setHasSubmitted(false);
      setShowSuccess(true);
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current);
      }
      successTimerRef.current = window.setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
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
    <form
      className={`contact-form${hasSubmitted ? " is-submitted" : ""}`}
      id="contact-form"
      ref={formRef}
      onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span className="label-text">
            Meno a priezvisko
            {requiredMark}
          </span>
          <input type="text" name="from_name" placeholder="Vaše meno" required />
        </label>
        <label>
          <span className="label-text">
            Telefón
            {requiredMark}
          </span>
          <input type="tel" name="phone" placeholder="+421" required />
        </label>
        <label>
          <span className="label-text">
            Email
            {requiredMark}
          </span>
          <input type="email" name="from_email" placeholder="vas@email.sk" required />
        </label>
        <label>
          <span className="label-text">
            Mesto / lokalita
            {requiredMark}
          </span>
          <input type="text" name="location" placeholder="Bratislava" required />
        </label>
        <label>
          <span className="label-text">Názov poisťovne</span>
          <input
            type="text"
            name="insurer_name"
            placeholder="Allianz, Kooperativa..."
            value={insurerName}
            onChange={(event) => setInsurerName(event.target.value)}
          />
        </label>
        <label>
          <span className="label-text">
            Číslo poistnej udalosti
            {claimNumberRequired ? requiredMark : null}
          </span>
          <input
            type="text"
            name="claim_number"
            placeholder="Ak už máte pridelené"
            value={claimNumber}
            onChange={(event) => setClaimNumber(event.target.value)}
            required={claimNumberRequired}
          />
        </label>
      </div>
      <label>
        <span className="label-text">
          Popis situácie
          {requiredMark}
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="Stručne opíšte, čo sa stalo a v akom je to stave..."
          required></textarea>
      </label>
      <div className="form-actions">
        <button className="button" type="submit">
          Odoslať formulár
        </button>
        <span>Odpovedáme zvyčajne do 12 hodín.</span>
      </div>
      {status.message && (
        <div className={`form-status tone-${status.tone}`} role="status" aria-live="polite">
          {status.message}
        </div>
      )}
      {showSuccess && (
        <div
          className="success-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Odoslanie formulára"
        >
          <div className="success-modal">
            <div className="success-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M6 12l4 4 8-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Ďakujeme</h3>
            <p>Úspešne ste odoslali kontaktný formulár.</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
