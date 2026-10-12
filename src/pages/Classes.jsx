function Classes({ language, setCurrentPage }) {
  return (
    <section id="classes" className="section">

      <div className="section-title">
        <p>
          {language === "en"
            ? "LEARNING & DEVOTION"
            : "ಕಲಿಕೆ ಮತ್ತು ಭಕ್ತಿ"}
        </p>

        <h2>
          {language === "en"
            ? "Classes & Activities"
            : "ತರಗತಿಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳು"}
        </h2>
      </div>

      <div className="cards">

        {/* Bhajan */}
        <div
          className="card"
          onClick={() => setCurrentPage("bhajan")}
          style={{ cursor: "pointer" }}
        >
          <div className="card-icon">🎶</div>

          <h3>
            {language === "en" ? "Bhajan" : "ಭಜನೆ"}
          </h3>

          <p>
            {language === "en"
              ? "Devotional bhajan classes."
              : "ಭಕ್ತಿಗೀತೆಗಳ ಭಜನಾ ತರಗತಿಗಳು."}
          </p>
        </div>

        {/* RSS */}
        <div
          className="card"
          onClick={() => setCurrentPage("rss")}
          style={{ cursor: "pointer" }}
        >
          <div className="card-icon">🇮🇳</div>

          <h3>
            {language === "en"
              ? "RSS Activities"
              : "ಆರ್‌ಎಸ್‌ಎಸ್ ಚಟುವಟಿಕೆಗಳು"}
          </h3>

          <p>
            {language === "en"
              ? "Social, cultural and community activities."
              : "ಸಾಮಾಜಿಕ, ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಸಮುದಾಯ ಚಟುವಟಿಕೆಗಳು."}
                  </p>
        </div>

        {/* Harmonium */}
        <div
          className="card"
          onClick={() => setCurrentPage("harmonium")}
          style={{ cursor: "pointer" }}
        >
          <div className="card-icon">🎹</div>

          <h3>
            {language === "en" ? "Harmonium" : "ಹಾರ್ಮೋನಿಯಂ"}
          </h3>

          <p>
            {language === "en"
              ? "Learn harmonium and devotional music."
              : "ಹಾರ್ಮೋನಿಯಂ ಮತ್ತು ಭಕ್ತಿಗೀತೆಗಳ ಕಲಿಕೆ."}
          </p>
        </div>

        {/* Tabla */}
        <div
          className="card"
          onClick={() => setCurrentPage("tabla")}
          style={{ cursor: "pointer" }}
        >
          <div className="card-icon">🥁</div>

          <h3>
            {language === "en" ? "Tabla" : "ತಬಲಾ"}
          </h3>

          <p>
            {language === "en"
              ? "Learn rhythm and traditional percussion."
              : "ಲಯ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವಾದ್ಯ ಕಲಿಕೆ."}
          </p>
        </div>

        {/* Balagokula */}
        <div
          className="card"
          onClick={() => setCurrentPage("balagokula")}
          style={{ cursor: "pointer" }}
        >
          <div className="card-icon">👦</div>

          <h3>
            {language === "en" ? "Balagokula" : "ಬಾಲಗೋಕುಲ"}
          </h3>

          <p>
            {language === "en"
              ? "Cultural and traditional activities for children."
              : "ಮಕ್ಕಳಿಗಾಗಿ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಚಟುವಟಿಕೆಗಳು."}
          </p>
        </div>

        {/* Yoga Shiksha */}
        <div
          className="card"
          onClick={() => setCurrentPage("yoga")}
          style={{ cursor: "pointer" }}
        >
          <div className="card-icon">🧘</div>

          <h3>
            {language === "en" ? "Yoga Shiksha" : "ಯೋಗ ಶಿಕ್ಷಣ"}
          </h3>

          <p>
            {language === "en"
              ? "Yoga learning for physical and mental well-being."
              : "ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಯೋಗ ಶಿಕ್ಷಣ."}
          </p>
        </div>

        

      </div>
    </section>
  );
}

export default Classes;