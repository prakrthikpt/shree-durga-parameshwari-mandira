function Pooja({ language }) {
  return (
    <section id="pooja" className="section pooja">

      <div className="section-title">
        <p>
          {language === "en" ? "DIVINE SERVICES" : "ದೈವಿಕ ಸೇವೆಗಳು"}
        </p>

        <h2>
          {language === "en" ? "Pooja & Seva" : "ಪೂಜೆ ಮತ್ತು ಸೇವೆ"}
        </h2>
      </div>

      <div className="cards">


        <div className="card">
          <div className="card-icon">🔱</div>

          <h3>
            {language === "en" 
            ? "Navaratri Seva" 
            : "ನವರಾತ್ರಿ ಸೇವೆ"}
          </h3>

          <p>
            {language === "en"
              ? "🌺The Navaratri Festival 2026 will be celebrated from October 11 to October 19 in the divine presence of Sri Durgaparameshwari Amma. During these sacred days, different Bhajane teams will offer devotional bhajane every evening, and devotees may offer special poojas with devotion and faith. Prasada will be served to all devotees. May these holy days be filled with devotion, prayer, spiritual joy and the divine blessings of Sri Durgaparameshwari Amma.🙏"
              : "🌺2026 ರ ನವರಾತ್ರಿ ಹಬ್ಬವನ್ನು ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಅಮ್ಮನ ದೈವಿಕ ಸಾನ್ನಿಧ್ಯದಲ್ಲಿ ಅಕ್ಟೋಬರ್ 11 ರಿಂದ ಅಕ್ಟೋಬರ್ 19 ರವರೆಗೆ ಆಚರಿಸಲಾಗುವುದು. ಈ ಪವಿತ್ರ ದಿನಗಳಲ್ಲಿ, ವಿಭಿನ್ನ ಭಜನೆ ತಂಡಗಳು ಪ್ರತಿದಿನ ಸಂಜೆ ಭಕ್ತಿಪೂರ್ವಕ ಭಜನೆಗಳನ್ನು ಸಲ್ಲಿಸುತ್ತವೆ, ಮತ್ತು ಭಕ್ತರು ಭಕ್ತಿ ಮತ್ತು ನಂಬಿಕೆಯಿಂದ ವಿಶೇಷ ಪೂಜೆಗಳನ್ನು ಸಲ್ಲಿಸಬಹುದು. ಪ್ರಸಾದವನ್ನು ಎಲ್ಲಾ ಭಕ್ತರಿಗೆ ನೀಡಲಾಗುತ್ತದೆ. ಈ ಪವಿತ್ರ ದಿನಗಳು ಭಕ್ತಿ, ಪ್ರಾರ್ಥನೆ, ಆಧ್ಯಾತ್ಮಿಕ ಸಂತೋಷ ಮತ್ತು ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಅಮ್ಮನ ದೈವಿಕ ಆಶೀರ್ವಾದಗಳಿಂದ ತುಂಬಿರಲಿ.🙏"}
          </p>
        </div>

        <div className="card">
          <div className="card-icon">🌺</div>

          <h3>
            {language === "en" ? "Hoovina Pooje" : "ಹೂವಿನ ಪೂಜೆ"}
          </h3>

          <p>
            {language === "en"
              ? "🌸Hoovina Pooje is a sacred offering of flowers to Sri Durgaparameshwari Amma, performed with devotion and faith. Devotees offer flowers seeking the divine blessings, grace and protection of the Goddess.🙏"
              : "🌸ಹೂವಿನ ಪೂಜೆಯು ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಅಮ್ಮನವರಿಗೆ ಭಕ್ತಿಶ್ರದ್ಧೆಯಿಂದ ಹೂವುಗಳನ್ನು ಅರ್ಪಿಸುವ ಪವಿತ್ರ ಸೇವೆಯಾಗಿದೆ. ದೇವಿಯ ದಿವ್ಯ ಆಶೀರ್ವಾದ, ಕೃಪೆ ಮತ್ತು ರಕ್ಷಣೆಯನ್ನು ಕೋರಿ ಭಕ್ತಾದಿಗಳು ಹೂವುಗಳನ್ನು ಸಮರ್ಪಿಸುತ್ತಾರೆ.🙏"}
          </p>
        </div>

        <div className="card">
          <div className="card-icon">🥥</div>

          <h3>
            {language === "en" ? "Special Pooja" : "ವಿಶೇಷ ಪೂಜೆ"}
          </h3>

          <p>
            {language === "en"
              ? "Special poojas conducted during important occasions and festivals."
              : "ಪ್ರಮುಖ ಸಂದರ್ಭಗಳು ಮತ್ತು ಉತ್ಸವಗಳಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆಗಳನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ."}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Pooja;