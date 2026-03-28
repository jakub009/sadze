const Topbar = () => (
  <div className="topbar">
    <div className="container topbar-inner">
      <div className="topbar-item topbar-item--stack">
        <span className="topbar-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
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
        <div className="topbar-content">
          <a href="tel:+421911296198">+421 911 296 198</a>
        </div>
      </div>
      <div className="topbar-item">
        <span className="topbar-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path
              d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M3 7l9 7 9-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="topbar-content">
          <a href="mailto:sadzesk@centrum.sk">sadzesk@centrum.sk</a>
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;
