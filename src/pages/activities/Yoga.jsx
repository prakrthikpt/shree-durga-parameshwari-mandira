function Yoga({ language, setSelectedImage }) {
  return (
    <section id="yoga" className="section">

      <div className="section-title">
        <p>
          {language === "en"
            ? "HEALTH & WELL-BEING"
            : "ಆರೋಗ್ಯ ಮತ್ತು ಕ್ಷೇಮ"}
        </p>

        <h2>
          {language === "en"
            ? "Yoga Shiksha"
            : "ಯೋಗ ಶಿಕ್ಷಣ"}
        </h2>
      </div>

      <div className="gallery-grid">

        {/* Yoga Image 1 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/yoga1.jpeg")}
        >
          <img
            src="/images/yoga1.jpeg"
            alt={
              language === "en"
                ? "Yoga Shiksha"
                : "ಯೋಗ ಶಿಕ್ಷಣ"
            }
          />
        </div>

        {/* Yoga Image 2 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/yoga2.jpeg")}
        >
          <img
            src="/images/yoga2.jpeg"
            alt={
              language === "en"
                ? "Yoga Shiksha"
                : "ಯೋಗ ಶಿಕ್ಷಣ"
            }
          />
        </div>

        {/* Yoga Image 3 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/yoga3.jpeg")}
        >
          <img
            src="/images/yoga3.jpeg"
            alt={
              language === "en"
                ? "Yoga Shiksha"
                : "ಯೋಗ ಶಿಕ್ಷಣ"
            }
          />
        </div>

      </div>

    </section>
  );
}

export default Yoga;