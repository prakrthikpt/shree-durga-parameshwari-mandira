function Home({ language, setCurrentPage }) {
  return (
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
  );
}

export default Home;