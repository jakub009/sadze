const EmergencyCall = () => (
  <a
    className="emergency-call"
    href="tel:+421911296198"
    aria-label="Nonstop linka +421 911 296 198"
  >
    <span className="emergency-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path
          d="M5.5 4h3l1.2 4.8-2.2 1.4a12.5 12.5 0 0 0 5.6 5.6l1.4-2.2L20 15.5v3a1.5 1.5 0 0 1-1.6 1.5C10.8 19.6 4.4 13.2 4 5.6A1.5 1.5 0 0 1 5.5 4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="emergency-title">RÝCHLY KONTAKT</span>
    <span className="emergency-number">+421 911 296 198</span>
  </a>
);

export default EmergencyCall;
