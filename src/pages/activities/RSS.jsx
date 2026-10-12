function RSS({ language, setSelectedImage }) {
  return (
    <section id="rss" className="section">
      <div className="section-title">
        <p>
          {language === "en"
            ? "SOCIAL & CULTURAL ACTIVITIES"
            : "ಸಾಮಾಜಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳು"}
        </p>

        <h2>
          {language === "en"
            ? "RSS Activities"
            : "ಆರ್‌ಎಸ್‌ಎಸ್ ಚಟುವಟಿಕೆಗಳು"}
        </h2>
      </div>

      <div className="gallery-grid">

        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/rss1.jpeg")}
        >
          <img
            src="/images/rss1.jpeg"
            alt={language === "en" ? "RSS Activities" : "ಆರ್‌ಎಸ್‌ಎಸ್ ಚಟುವಟಿಕೆಗಳು"}
          />
        </div>

        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/rss2.jpeg")}
        >
          <img
            src="/images/rss2.jpeg"
            alt={language === "en" ? "RSS Activities" : "ಆರ್‌ಎಸ್‌ಎಸ್ ಚಟುವಟಿಕೆಗಳು"}
          />
        </div>

        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/rss3.jpeg")}
        >
          <img
            src="/images/rss3.jpeg"
            alt={language === "en" ? "RSS Activities" : "ಆರ್‌ಎಸ್‌ಎಸ್ ಚಟುವಟಿಕೆಗಳು"}
          />
        </div>

        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/rss4.jpeg")}
        >
          <img
            src="/images/rss4.jpeg"
            alt={language === "en" ? "RSS Activities" : "ಆರ್‌ಎಸ್‌ಎಸ್ ಚಟುವಟಿಕೆಗಳು"}
          />
        </div>

      </div>
    </section>
  );
}

export default RSS;