function Harmonium({ language, setSelectedImage }) {
  return (
    <section id="harmonium" className="section">

      <div className="section-title">
        <p>
          {language === "en"
            ? "MUSIC LEARNING"
            : "ಸಂಗೀತ ಕಲಿಕೆ"}
        </p>

        <h2>
          {language === "en"
            ? "Harmonium"
            : "ಹಾರ್ಮೋನಿಯಂ"}
        </h2>
      </div>

      <div className="gallery-grid">

        {/* Harmonium Image 1 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/harmonium1.jpeg")}
        >
          <img
            src="/images/harmonium1.jpeg"
            alt={
              language === "en"
                ? "Harmonium"
                : "ಹಾರ್ಮೋನಿಯಂ"
            }
          />
        </div>

        {/* Harmonium Image 2 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/harmonium2.jpeg")}
        >
          <img
            src="/images/harmonium2.jpeg"
            alt={
              language === "en"
                ? "Harmonium"
                : "ಹಾರ್ಮೋನಿಯಂ"
            }
          />
        </div>

        {/* Harmonium Image 3 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/harmonium3.jpeg")}
        >
          <img
            src="/images/harmonium3.jpeg"
            alt={
              language === "en"
                ? "Harmonium"
                : "ಹಾರ್ಮೋನಿಯಂ"
            }
          />
        </div>

      </div>

    </section>
  );
}

export default Harmonium;