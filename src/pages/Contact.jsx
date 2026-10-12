function Contact({ language }) {
  return (
    <section id="contact" className="section">

      <div className="section-title">
        <p>
          {language === "en"
            ? "CONNECT WITH US"
            : "ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ"}
        </p>

        <h2>
          {language === "en"
            ? "Mandira Information"
            : "ಮಂದಿರದ ಮಾಹಿತಿ"}
        </h2>
      </div>

      <div className="contact-container">

        {/* Location */}
        <div className="contact-card">
          <span>📍</span>

          <h3>
            {language === "en" ? "Location" : "ಸ್ಥಳ"}
          </h3>

          <p>
            <strong>
              {language === "en"
                ? "Sri Durgaparameshwari Seva Samithi(R), Padavu Mugrodi, Mangaluru, Karnataka"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಸೇವಾ ಸಮಿತಿ (ರಿ), ಪದವು ಮುಗ್ರೋಡಿ, ಮಂಗಳೂರು, ಕರ್ನಾಟಕ"}
            </strong>
          </p>

          <a
            href="https://www.google.co.in/maps/place/Sri+Durgaparameshwari+Seva+Samithi(R),MUGRODI/@12.9072298,74.870922,19z/data=!4m6!3m5!1s0x3ba35bede049abd9:0xd603669bf93effe3!8m2!3d12.9072298!4d74.8715657!16s%2Fg%2F11mbpsnwzx?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D](https://www.google.co.in/maps/place/Sri+Durgaparameshwari+Seva+Samithi\(R\),MUGRODI/@12.9072298,74.870922,19z/data=!4m6!3m5!1s0x3ba35bede049abd9:0xd603669bf93effe3!8m2!3d12.9072298!4d74.8715657!16s%2Fg%2F11mbpsnwzx?entry=ttu\&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {language === "en"
              ? "View Exact Location on Google Maps"
              : "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನಿಖರ ಸ್ಥಳವನ್ನು ನೋಡಿ"}
          </a>
        </div>


        {/* Mandira Timings */}
        <div className="contact-card">
          <span>🕘</span>

          <h3>
            {language === "en"
              ? "Mandira Timings"
              : "ಮಂದಿರದ ಸಮಯ"}
          </h3>

          <p>
            <strong>

              {language === "en"
                ? "Friday morning: 6:00 AM – 8:00 PM"
                : "ಶುಕ್ರವಾರ ಬೆಳಿಗ್ಗೆ: 6:00 AM – 8:00 PM"}

              <br />

              {language === "en"
                ? "Friday evening: 3:00 PM – 9:30 PM"
                : "ಶುಕ್ರವಾರ ಸಂಜೆ: 3:00 PM – 9:30 PM"}

              <br />

              {language === "en"
                ? "Every morning: 6:00 AM – 8:00 AM"
                : "ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ: 6:00 AM – 8:00 AM"}

              <br />

              {language === "en"
                ? "Every evening: 5:00 PM – 8:00 PM"
                : "ಪ್ರತಿದಿನ ಸಂಜೆ: 5:00 PM – 8:00 PM"}

            </strong>
          </p>
        </div>


        {/* Contact Number */}
        <div className="contact-card">
          <span>📞</span>

          <h3>
            {language === "en"
              ? "Contact"
              : "ಸಂಪರ್ಕ"}
          </h3>

          <p>
            +91 7483603277
          </p>

          <a
            href="tel:+917483603277"
            className="contact-link"
          >
            {language === "en"
              ? "Call Mandira"
              : "ಮಂದಿರಕ್ಕೆ ಕರೆ ಮಾಡಿ"}
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;