function Home({ language, setCurrentPage }) {
  return (
    <>
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="welcome">
          {language === "en"
            ? "🙏 OM SRI DURGA PARAMESHWARI NAMAH 🙏"
            : "🙏 ಓಂ ಶ್ರೀ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ ನಮಃ 🙏"}
        </p>

        <h1 className="temple-titel">
          {language === "en" ? (
            <>
              Sri <span>Durgaparameshwari</span> Seva Samithi (R)
            </>
          ) : (
            "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಸೇವಾ ಸಮಿತಿ (ರಿ)"
          )}
        </h1>

        <h2>
          {language === "en"
            ? "Padavu Mugrodi"
            : "ಪದವು ಮುಗ್ರೋಡಿ"}
        </h2>

        <p>
          {language === "en"
            ? "Welcome to the divine abode of"
            : "ದಿವ್ಯ ಸನ್ನಿಧಿಗೆ ಸ್ವಾಗತ"}

          <strong>
            {language === "en"
              ? " Shree Durgaparameshwari"
              : " ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ"}
          </strong>.

          {" "}

          {language === "en"
            ? "May the blessings of the Goddess bring peace, prosperity and happiness to every devotee."
            : "ದೇವಿಯ ಆಶೀರ್ವಾದವು ಪ್ರತಿಯೊಬ್ಬ ಭಕ್ತನಿಗೂ ಶಾಂತಿ, ಸಮೃದ್ಧಿ ಮತ್ತು ಸಂತೋಷವನ್ನು ತರಲಿ."}
        </p>

        <div className="hero-buttons">

          <a
            href="#about"
            className="btn primary"
            onClick={() => setCurrentPage("about")}
          >
            {language === "en"
              ? "Discover Temple"
              : "ಮಂದಿರದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ"}
          </a>

          <a
            href="#contact"
            className="btn secondary"
            onClick={() => setCurrentPage("contact")}
          >
            {language === "en"
              ? "Contact Us"
              : "ಸಂಪರ್ಕಿಸಿ"}
          </a>

        </div>

      </div>

      {/* Temple Photo */}
      <div className="hero-image">
        <img
          src="/temple-home.jpeg"
          alt="Shree Durugraparameshwari Mandira"
        />
      </div>

    </section>

          
      <section className="bhoomi-pooja-section">

        <div className="bhoomi-pooja-container">

          {/* Bhoomi Pooja Poster */}
          <div className="bhoomi-pooja-image">
            <img
              src="/images/bhoomi-pooja.jpeg"
              alt="Bhoomi Pooja invitation"
            />
          </div>

          {/* Announcement Details */}
          <div className="bhoomi-pooja-content">

            <span className="bhoomi-subtitle">
              {language === "en"
                ? "A DIVINE BEGINNING"
                : "ದೈವಿಕ ಶುಭಾರಂಭ"}
            </span>

            <h2>
              {language === "en"
                ? "Bhoomi Pooja"
                : "ಭೂಮಿ ಪೂಜೆ"}
            </h2>

            <h3>
              {language === "en"
                ? "A New Beginning for Our Mandira"
                : "ನಮ್ಮ ಮಂದಿರದ ಹೊಸ ಶುಭಾರಂಭ"}
            </h3>

            <p>
              {language === "en"
                ? "The auspicious beginning of the construction of our long-awaited Mandira Sabha Bhavana."
                : "ನಮ್ಮ ಬಹುದಿನಗಳ ಕನಸಾದ ಮಂದಿರದ ಸಭಾಭವನದ ನಿರ್ಮಾಣ ಕಾರ್ಯಕ್ಕೆ ಶುಭಾರಂಭ."}
            </p>

            <div className="bhoomi-details">

              <p>
                <strong>
                  {language === "en" ? "Date: " : "ದಿನಾಂಕ: "}
                </strong>
                {language === "en"
                  ? "18 November 2026, Wednesday"
                  : "18 ನವೆಂಬರ್ 2026, ಬುಧವಾರ"}
              </p>

              <p>
                <strong>
                  {language === "en" ? "Time: " : "ಸಮಯ: "}
                </strong>
                {language === "en"
                  ? "9:21 AM"
                  : "ಬೆಳಿಗ್ಗೆ 9:21ಕ್ಕೆ"}
              </p>

              <p>
                {language === "en"
                  ? "Auspicious Muhurta"
                  : "ಶುಭ ಮುಹೂರ್ತ"}
              </p>

            </div>

            <p className="bhoomi-invitation">
              {language === "en"
                ? "All committee members and devotees of our village are warmly invited to attend and participate in this auspicious occasion and make the programme a success."
                : "ಸಮಿತಿಯ ಎಲ್ಲಾ ಸದಸ್ಯರು ಹಾಗೂ ಊರಿನ ಸಮಸ್ತ ಭಕ್ತಾಭಿಮಾನಿಗಳು ಆಗಮಿಸಿ ಈ ಶುಭ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಭಾಗವಹಿಸಿ, ಕಾರ್ಯಕ್ರಮವನ್ನು ಯಶಸ್ವಿಗೊಳಿಸಬೇಕಾಗಿ ವಿನಂತಿ."}
            </p>

            <h4>
              Sri Durgaparameshwari Seva Samithi (R)
            </h4>

            <p>
              {language === "en"
                ? "Padavu, Mugrodi"
                : "ಪದವು, ಮುಗ್ರೋಡಿ"}
            </p>

          </div>

        </div>

      </section>

    </>
    
  );
}

export default Home;