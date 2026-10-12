function Bhajan({ language, setSelectedImage }) {
  return (
    <section id="bhajan" className="section">

      <div className="section-title">
        <p>
          {language === "en"
            ? "DEVOTIONAL MUSIC"
            : "ಭಕ್ತಿಗೀತೆಗಳು"}
        </p>

        <h2>
          {language === "en"
            ? "Bhajan"
            : "ಭಜನೆ"}
        </h2>
      </div>

      <div className="gallery-grid">

        {/* Bhajan Image 1 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/bhajan1.jpeg")}
        >
          <img
            src="/images/bhajan1.jpeg"
            alt={
              language === "en"
                ? "Bhajan"
                : "ಭಜನೆ"
            }
          />
        </div>

        {/* Bhajan Image 2 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/bhajan2.jpeg")}
        >
          <img
            src="/images/bhajan2.jpeg"
            alt={
              language === "en"
                ? "Bhajan"
                : "ಭಜನೆ"
            }
          />
        </div>

        {/* Bhajan Image 3 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/bhajan3.jpeg")}
        >
          <img
            src="/images/bhajan3.jpeg"
            alt={
              language === "en"
                ? "Bhajan"
                : "ಭಜನೆ"
            }
          />
        </div>

      </div>

    </section>
  );
}

export default Bhajan;