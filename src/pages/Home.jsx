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

      
      <section className="upcoming-events-section">

        <div className="upcoming-events-container">

          {/*<div className="upcoming-events-message">
            <h2>
              {language === "en"
                ? "Upcoming Event Will be Announced Soon"
                : "ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮದ ದಿನಾಂಕವನ್ನು ಶೀಘ್ರದಲ್ಲೇ ಪ್ರಕಟಿಸಲಾಗುವುದು."}
            </h2>
          </div>
          */}


          {/* Upcoming Event Poster */}
          <div className="event-image">
            <img
              src="/images/classes-biggins.jpeg"
              alt="Reopening class for children and adults"
            />
          </div>

          {/* Announcement Details */}
          <div className="upcoming-events-content">

            <span className="upcoming-events-subtitle">
              {language === "en"
                ? "🎶🌺 THE MUSICAL JOURNEY CONTINUES! 🌺🎶"
                : "🎶🌺 ಸಂಗೀತ ಕಲಿಕೆಯ ಪಯಣ ಮುಂದುವರಿಯುತ್ತಿದೆ! 🌺🎶"}
            </span>

            <h2>
              {language === "en"
                ? "HARMONIUM & TABLA MUSIC CLASSES"
                : "ಹಾರ್ಮೋನಿಯಂ ಮತ್ತು ತಬಲಾ ಸಂಗೀತ ತರಗತಿಗಳು"}
            </h2>

            <h3>
              {language === "en"
                ? "Learn Music, Develop Talent & Keep Our Traditions Alive!"
                : "ಸಂಗೀತದ ಲಯದಲ್ಲಿ ಕಲಿಯೋಣ, ಪ್ರತಿಭೆಯನ್ನು ಬೆಳೆಸೋಣ!"}
            </h3>

            <p>
              {language === "en"
                ? "Sri Durgaparameshwari Seva Samithi (R), Padavu Mugrodi, has already been conducting Harmonium and Tabla music classes. Continuing this initiative, a new batch for interested students will commence from 26th November 2026."
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಸೇವಾ ಸಮಿತಿ (ರಿ), ಪದವು ಮುಗ್ರೋಡಿ ವತಿಯಿಂದ ಈಗಾಗಲೇ ಹಾರ್ಮೋನಿಯಂ ಮತ್ತು ತಬಲಾ ಸಂಗೀತ ತರಗತಿಗಳು ನಡೆಯುತ್ತಿದ್ದು, ಈ ತರಗತಿಗಳನ್ನು ಮುಂದುವರಿಸುವುದರೊಂದಿಗೆ ಹೊಸ ವಿದ್ಯಾರ್ಥಿಗಳಿಗಾಗಿ ದಿನಾಂಕ 26-11-2026 ರಿಂದ ಹೊಸ ಬ್ಯಾಚ್ ಪ್ರಾರಂಭವಾಗಲಿದೆ."}
            </p>

            <p className="upcoming-events-invitation">
                {language === "en"
                  ? "This is a wonderful opportunity for children and students who are interested in learning music and developing their musical talents.s."
                  : "ಸಂಗೀತ ಕಲಿಯಲು ಆಸಕ್ತಿ ಹೊಂದಿರುವ ಮಕ್ಕಳು ಹಾಗೂ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಇದೊಂದು ಉತ್ತಮ ಅವಕಾಶವಾಗಿದೆ. ತಮ್ಮ ಮಕ್ಕಳನ್ನು ಸಂಗೀತ ತರಗತಿಗಳಿಗೆ ಸೇರಿಸಲು ಆಸಕ್ತಿ ಹೊಂದಿರುವ ಪೋಷಕರು ಈ ಅವಕಾಶದ ಸದುಪಯೋಗ ಪಡೆದುಕೊಳ್ಳಬೇಕಾಗಿ ವಿನಂತಿ."}
            </p>

            <h3>
              {language === "en"
                ? "Interested students and parents are warmly welcome to attend the classes and make use of this opportunity."
                : "ಆಸಕ್ತ ವಿದ್ಯಾರ್ಥಿಗಳು ಹಾಗೂ ಪೋಷಕರು ಆತ್ಮೀಯವಾಗಿ ಆಗಮಿಸಬೇಕಾಗಿ ಕೋರುತ್ತೇವೆ."}
            </h3>

            <div className="upcoming-events-details">

                <strong>
                  {language === "en" 
                   ? "FOR MORE INFORMATION, CONTACT:" 
                   : "ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ: "}
                </strong>

              <p>
                {language === "en"
                  ? "Dinesh Poojary : 9632093970"
                  : "ದಿನೇಶ್ ಪೂಜಾರಿ : 9632093970"}
              </p>

              <p>
                
                {language === "en"
                  ? "Rajesh Kundar : 9481180491"
                  : "ರಾಜೇಶ್ ಕುಂದರ್ : 9481180491"}
              </p>

              <p>
                {language === "en"
                  ? "Harusha Sudhakar Shetty : 8884030109"
                  : "ಹರುಷ ಸುಧಾಕರ್ ಶೆಟ್ಟಿ : 8884030109"}
              </p>

              <p>
                {language === "en"
                  ? "Harina Harish : 9739891168"
                  : "ಹರಿಣಾ ಹರೀಶ್ : 9739891168"}
              </p>

            </div>


            <h4>
              Sri Durgaparameshwari Seva Samithi (R)
            </h4>

            <p>
              {language === "en"
                ? "Learn Music • Nurture Talent • Preserve Our Culture!"
                : "ಸಂಗೀತ ಕಲಿಯೋಣ • ಪ್ರತಿಭೆ ಬೆಳೆಸೋಣ • ನಮ್ಮ ಸಂಸ್ಕೃತಿಯನ್ನು ಉಳಿಸೋಣ!"}
            </p>

          </div>
              

        </div>
        
      </section>
    
    
    </> 
  );
}

export default Home;