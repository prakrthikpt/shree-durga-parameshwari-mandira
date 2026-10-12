function Events({ language }) {
  return (
    <section id="events" className="section events">

      <div className="section-title">
        <p>
          {language === "en" ? "CELEBRATIONS" : "ಆಚರಣೆಗಳು"}
        </p>

        <h2>
          {language === "en" ? "Mandira Events" : "ಮಂದಿರದ ಕಾರ್ಯಕ್ರಮಗಳು"}
        </h2>
      </div>

      <div className="event-container">

        {/* Annual Temple Festival */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🛕</div>

            <h3>
              {language === "en"
                ? "Annual mandira Festival on February"
                : "ವಾರ್ಷಿಕ ಮಂದಿರದ ಉತ್ಸವ ಫೆಬ್ರವರಿ"}
            </h3>
          </div>

          <p>
            {language === "en"
              ? "Join devotees in prayer, pooja and traditional celebrations at our temple."
              : "ನಮ್ಮ ಮಂದಿರದಲ್ಲಿ ಭಕ್ತರೊಂದಿಗೆ ಪ್ರಾರ್ಥನೆ, ಪೂಜೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಆಚರಣೆಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ."}
          </p>
        </div>

        {/* Atidongidina */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🌺</div>

            <h3>
              {language === "en"
                ? "Ashaadamasa dalli ondu dina (Attidongi dina)"
                : "ಆಷಾಢ ಮಾಸದಲ್ಲಿ ಒಂದು ದಿನ (ಆಟಿಡೊಂಜಿ ದಿನ)"}
            </h3>
          </div>

          <p>
            {language === "en"
              ? "A special traditional celebration observed at the Mandira."
              : "ಮಂದಿರದಲ್ಲಿ ಆಚರಿಸಲಾಗುವ ವಿಶೇಷ ಸಾಂಪ್ರದಾಯಿಕ ಆಚರಣೆ."}
          </p>
        </div>

        {/* Guru Purnima */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🙏</div>

            <h3>
              {language === "en"
                ? "Guru Purnima Day"
                : "ಗುರು ಪೂರ್ಣಿಮಾ ದಿನ"}
            </h3>
          </div>

          <p>
            {language === "en"
              ? "A day dedicated to expressing gratitude and respect to Gurus."
              : "ಗುರುಗಳಿಗೆ ಕೃತಜ್ಞತೆ ಮತ್ತು ಗೌರವವನ್ನು ಅರ್ಪಿಸುವ ವಿಶೇಷ ದಿನ."}
          </p>
        </div>

        {/* Varalakshmi Pooja */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🌺</div>

            <h3>
              {language === "en"
                ? "Varalakshmi Pooja"
                : "ವರಲಕ್ಷ್ಮಿ ಪೂಜೆ"}
            </h3>
          </div>

          <p>
            {language === "en"
              ? "A special Varalakshmi Pooja is celebrated at the Mandira with devotion and prayers seeking the blessings of Goddess Varalakshmi."
              : "ವರಲಕ್ಷ್ಮಿ ದೇವಿಯ ಆಶೀರ್ವಾದವನ್ನು ಪಡೆಯಲು ಮಂದಿರದಲ್ಲಿ ಭಕ್ತಿ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯೊಂದಿಗೆ ವಿಶೇಷ ವರಲಕ್ಷ್ಮಿ ಪೂಜೆಯನ್ನು ಆಚರಿಸಲಾಗುತ್ತದೆ."}
          </p>
        </div>

        {/* Raksha Bandhan */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🪢</div>

            <h3>
              {language === "en"
                ? "Raksha Bandhan"
                : "ರಕ್ಷಾ ಬಂಧನ"}
            </h3>
          </div>

          <p>
            {language === "en"
              ? "Raksha Bandhan is celebrated at the Mandira with devotion, prayers and a spirit of togetherness."
              : "ಮಂದಿರದಲ್ಲಿ ಭಕ್ತಿ, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಸಹೋದರತ್ವದ ಭಾವನೆಯೊಂದಿಗೆ ರಕ್ಷಾ ಬಂಧನವನ್ನು ಆಚರಿಸಲಾಗುತ್ತದೆ."}
          </p>
        </div>

        {/* Gokul Ashtami */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🦚</div>

            <h3>
              {language === "en"
                ? "Gokul Ashtami"
                : "ಗೋಕೂಲಾಷ್ಟಮಿ"}
            </h3>
          </div>

          <p>
            {language === "en"
              ? "Gokul Ashtami is celebrated with devotional prayers and traditional activities at the Mandira."
              : "ಮಂದಿರದಲ್ಲಿ ಭಕ್ತಿಪೂರ್ವಕ ಪ್ರಾರ್ಥನೆಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ಗೋಕೂಲಾಷ್ಟಮಿಯನ್ನು ಆಚರಿಸಲಾಗುತ್ತದೆ."}
          </p>
        </div>

        {/* Navaratri Celebration */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🔱</div>

            <h3>
              {language === "en"
                ? "Navaratri Celebration"
                : "ನವರಾತ್ರಿ ಆಚರಣೆ"}
            </h3>
          </div>

          <p>
            {language === "en"
              ? "Celebrate the divine power of Goddess Durga through prayers, pooja and spiritual activities."
              : "ಪ್ರಾರ್ಥನೆ, ಪೂಜೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳ ಮೂಲಕ ದುರ್ಗಾ ದೇವಿಯ ದೈವಿಕ ಶಕ್ತಿಯನ್ನು ಆಚರಿಸಿ."}
          </p>
        </div>

        {/* Deepawali */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🪔</div>

            <h3>
              {language === "en"
                ? "Deepawali"
                : "ದೀಪಾವಳಿ"}
            </h3>
          </div>

          <p>
            {language === "en"
              ? "Deepawali is celebrated at the Mandira with the lighting of lamps, prayers and devotional activities."
              : "ಮಂದಿರದಲ್ಲಿ ದೀಪ ಬೆಳಗಿಸುವುದು, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಭಕ್ತಿಪೂರ್ವಕ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ದೀಪಾವಳಿಯನ್ನು ಆಚರಿಸಲಾಗುತ್ತದೆ."}
          </p>
        </div>

        {/* Govupooje */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🐄</div>

            <h3>
              {language === "en"
                ? "Govupooje"
                : "ಗೋವು ಪೂಜೆ"}
            </h3>
          </div>

          <p>
            {language === "en"
              ? "A sacred ceremony dedicated to the worship and honoring of cows."
              : "ಗೋವುಗಳ ಪೂಜೆ ಮತ್ತು ಗೌರವಕ್ಕೆ ಸಮರ್ಪಿತವಾದ ಪವಿತ್ರ ಪೂಜೆ."}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Events;