function About({ language }) {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <p>
          {language === "en" ? "DIVINE HERITAGE" : "ದೈವಿಕ ಪರಂಪರೆ"}
        </p>

        <h2>
          {language === "en" ? "About the Mandira" : "ಮಂದಿರದ ಬಗ್ಗೆ"}
        </h2>
      </div>

      <div className="about-content">

       {/* LEFT SIDE IMAGES */}
        
        <div className="about-image">
          <img
            src="/images/mandira-about.jpeg"
            alt="Mandira"
            className="mandira-image"
            />

          <img
            src="/images/yakshagana-about.jpeg"
            alt="yakshagana"
            className="yakshagana-image"
            />
          
        </div>

        {/* RIGHT SIDE - FIRST CONTENT */}

        <div className="about-text">

          <h3>
            {language === "en"
              ? "Sri Durgaparameshwari Seva Samithi (R), Padavu Mugrodi "
              : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಸೇವಾ ಸಮಿತಿ (ರಿ), ಪದವು ಮುಗ್ರೋಡಿ"}
          </h3>

          <h4>
            {language === "en"
              ? "A Sacred Place of Devotion"
              : "ಭಕ್ತಿಯ ಪವಿತ್ರ ಸ್ಥಳ"}
          </h4>

          <h5>
            {language === "en"
              ? "We offer our prayers at the feet of Sri Durga Parameshwari Amma. "
              : "ನಾವು ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಅಮ್ಮನ ಪಾದಗಳಲ್ಲಿ ನಮ್ಮ ಪ್ರಾರ್ಥನೆಗಳನ್ನು ಸಲ್ಲಿಸುತ್ತೇವೆ."}
          </h5>

          <br />

          <p>
            {language === "en"
              ? "Sri Durgaparameshwari Seva Samithi (R), Padavu Mugrodi, is a community-focused organization dedicated to religious, cultural, educational, and social service activities."
              : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಸೇವಾ ಸಮಿತಿ (ರಿ), ಪದವು ಮುಗ್ರೋಡಿ ಧಾರ್ಮಿಕ, ಸಾಂಸ್ಕೃತಿಕ, ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ಸೇವಾ ಚಟುವಟಿಕೆಗಳಿಗೆ ಸಮರ್ಪಿತವಾದ ಸಮುದಾಯ ಸಂಸ್ಥೆಯಾಗಿದೆ."}
          </p>
        </div>

        {/* FULL WIDTH CONTENT BELOW */}

        <div className="about-full-text">

          <p>
            {language === "en"
              ? "The journey of Sri Durgaparameshwari Mandira began in 1969 with community-led Yakshagana and Satyanarayana Pooja. With the collective efforts of local devotees, the Mandira was inaugurated on 25 February 2012. Since then, Satyanarayana Pooja and Yakshagana have been conducted every year during the last week of February."
              : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರದ ಪಯಣವು 1969ರಲ್ಲಿ ಸಮುದಾಯದವರ ಸಹಕಾರದಿಂದ ಯಕ್ಷಗಾನ ಮತ್ತು ಸತ್ಯನಾರಾಯಣ ಪೂಜೆಯ ಮೂಲಕ ಆರಂಭವಾಯಿತು. ಸ್ಥಳೀಯ ಭಕ್ತರ ಸಹಕಾರದಿಂದ ಮಂದಿರವನ್ನು 25 ಫೆಬ್ರವರಿ 2012ರಂದು ಉದ್ಘಾಟಿಸಲಾಯಿತು. ಅಂದಿನಿಂದ ಪ್ರತಿವರ್ಷ ಫೆಬ್ರವರಿ ತಿಂಗಳ ಕೊನೆಯ ವಾರದಲ್ಲಿ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ ಮತ್ತು ಯಕ್ಷಗಾನವನ್ನು ನಡೆಸಲಾಗುತ್ತಿದೆ."}
          </p>

          <br/>

          <p>
            {language === "en"
              ? "The Mandira regularly conducts Bhajana Seva, Varmahalakshmi Pooja, Navaratri celebrations, Deepavali programs, and other religious and cultural activities. Free classes such as Balagokula, Bhajana, Harmonium, Tabla, Kunitha Bhajane, and Yoga are also provided for children and the community."
              : "ಮಂದಿರದಲ್ಲಿ ಪ್ರತೀ ಶುಕ್ರವಾರ ಭಜನಾ ಸೇವೆ, ವರಮಹಾಲಕ್ಷ್ಮೀ ಪೂಜೆ, ನವರಾತ್ರಿ ಉತ್ಸವ, ದೀಪಾವಳಿ ಆಚರಣೆ ಹಾಗೂ ವಿವಿಧ ಧಾರ್ಮಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ. ಮಕ್ಕಳಿಗಾಗಿ ಬಾಲಗೋಕುಲ, ಭಜನೆ, ಹಾರ್ಮೋನಿಯಂ, ತಬಲಾ, ಕುನಿತಾ ಭಜನೆ ಮತ್ತು ಯೋಗ ತರಗತಿಗಳನ್ನು ಉಚಿತವಾಗಿ ನಡೆಸಲಾಗುತ್ತದೆ."}
          </p>

          <br />

          <p>
            {language === "en"
              ? "The Samithi supports students through books, educational assistance, and recognition of academic achievements. It also provides health assistance, government-scheme guidance, and support to families in need. During the COVID-19 pandemic, the Samithi extended essential supplies, financial assistance, health camps, vaccination drives, and housing support to those facing difficulties."
              : "ಸಮಿತಿಯು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪುಸ್ತಕಗಳು, ಶೈಕ್ಷಣಿಕ ನೆರವು ಹಾಗೂ ಪ್ರತಿಭಾ ಗೌರವದ ಮೂಲಕ ಪ್ರೋತ್ಸಾಹ ನೀಡುತ್ತದೆ. ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಆರೋಗ್ಯ ಸಹಾಯ, ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಮಾಹಿತಿ ಮತ್ತು ವಿವಿಧ ರೀತಿಯ ಸಾಮಾಜಿಕ ನೆರವನ್ನು ನೀಡುತ್ತದೆ. ಕೋವಿಡ್-19 ಸಮಯದಲ್ಲಿಯೂ ಅಗತ್ಯ ವಸ್ತುಗಳು, ಆರ್ಥಿಕ ನೆರವು, ಆರೋಗ್ಯ ಶಿಬಿರಗಳು ಮತ್ತು ಲಸಿಕಾ ಅಭಿಯಾನಗಳ ಮೂಲಕ ಸಮಿತಿ ಸೇವೆ ಸಲ್ಲಿಸಿದೆ."
            }
          </p>

          <br/>

          <p>
            {language === "en"
              ? "Currently, the Samithi is developing a new building to provide better facilities for religious, cultural, educational, health, and community activities, continuing its commitment to serving devotees and the local community."
              : "ಪ್ರಸ್ತುತ, ಧಾರ್ಮಿಕ, ಸಾಂಸ್ಕೃತಿಕ, ಶೈಕ್ಷಣಿಕ, ಆರೋಗ್ಯ ಮತ್ತು ಸಮುದಾಯ ಚಟುವಟಿಕೆಗಳಿಗೆ ಉತ್ತಮ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುವ ಉದ್ದೇಶದಿಂದ ಮಂದಿರದ ಹೊಸ ಕಟ್ಟಡದ ನಿರ್ಮಾಣ ಕಾರ್ಯವನ್ನು ಕೈಗೊಳ್ಳಲಾಗಿದೆ. ಭಕ್ತರು ಮತ್ತು ಸ್ಥಳೀಯ ಸಮುದಾಯದ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸುವುದು ಸಮಿತಿಯ ಮುಖ್ಯ ಉದ್ದೇಶವಾಗಿದೆ."
            }
          </p>

          <br/>

          <p>
            {language === "en"
              ? ""
              : ""
            }
          </p>

          {/* FEATURES */}

          <div className="features">

            <div>
              
              <span>🙏</span>

              <h4>
                {language === "en" ? "Devotion" : "ಭಕ್ತಿ"}
              </h4>

              <p>
                {language === "en"
                  ? "A place of faith and prayer."
                  : "ನಂಬಿಕೆ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯ ಸ್ಥಳ."}
              </p>
            </div>

            <div>
              <span>🪔</span>

              <h4>
                {language === "en" ? "Tradition" : "ಸಂಪ್ರದಾಯ"}
              </h4>

              <p>
                {language === "en"
                  ? "Preserving sacred traditions."
                  : "ಪವಿತ್ರ ಸಂಪ್ರದಾಯಗಳನ್ನು ಸಂರಕ್ಷಿಸುವುದು."}
              </p>
            </div>

            <div>
              <span>🌺</span>

              <h4>
                {language === "en" ? "Blessings" : "ಆಶೀರ್ವಾದಗಳು"}
              </h4>

              <p>
                {language === "en"
                  ? "Seek divine blessings."
                  : "ದೈವಿಕ ಆಶೀರ್ವಾದವನ್ನು ಪಡೆಯಿರಿ."}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;