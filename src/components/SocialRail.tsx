const SocialRail = () => (
  <div className="social-rail" aria-label="Sociálne siete">
    <a href="#" className="social-rail-whatsapp" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <circle cx="12" cy="12" r="10.5" fill="#25D366" />
        <path
          d="M9.24 7.94c-.2-.45-.4-.46-.6-.47h-.52c-.18 0-.48.07-.73.33-.26.26-.97.95-.97 2.3s.99 2.67 1.13 2.86c.14.2 1.9 3 4.72 4.1 2.35.9 2.83.73 3.34.68.5-.04 1.62-.66 1.84-1.3.22-.64.22-1.2.15-1.3-.07-.1-.25-.16-.52-.3s-1.62-.8-1.88-.9c-.26-.1-.45-.15-.64.15s-.73.9-.9 1.1c-.17.2-.34.22-.6.08-.27-.14-1.14-.42-2.16-1.34-.8-.72-1.34-1.6-1.5-1.86-.16-.27-.02-.41.12-.54.12-.12.26-.3.4-.45.13-.15.17-.26.26-.44.08-.18.04-.33-.02-.47-.07-.15-.6-1.47-.83-2.02z"
          fill="#ffffff"
        />
      </svg>
    </a>
    <a href="#" className="social-rail-instagram" aria-label="Instagram">
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <defs>
          <linearGradient id="igGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f58529" />
            <stop offset="35%" stopColor="#dd2a7b" />
            <stop offset="70%" stopColor="#8134af" />
            <stop offset="100%" stopColor="#515bd4" />
          </linearGradient>
        </defs>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="url(#igGradient)" />
        <rect
          x="6.5"
          y="6.5"
          width="11"
          height="11"
          rx="3.2"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="3" fill="none" stroke="#ffffff" strokeWidth="1.6" />
        <circle cx="16.2" cy="7.8" r="1.1" fill="#ffffff" />
      </svg>
    </a>
    <a href="#" aria-label="Facebook">
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path
          d="M22.68 12c0-5.9-4.78-10.68-10.68-10.68S1.32 6.1 1.32 12c0 5.34 3.9 9.76 9 10.56v-7.47H7.62V12h2.7V9.8c0-2.66 1.58-4.14 4.02-4.14 1.17 0 2.4.2 2.4.2v2.64h-1.35c-1.33 0-1.74.83-1.74 1.68V12h2.96l-.47 3.09h-2.5v7.47c5.1-.8 9-5.22 9-10.56z"
          fill="#1877F2"
        />
      </svg>
    </a>
  </div>
);

export default SocialRail;
