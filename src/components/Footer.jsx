function Footer({ language }) {
  return (
    <footer>
      <div className="footer-logo">
        🛕{" "}
        {language === "en"
          ? "Shree Durga Parameshwari"
          : "ಶ್ರೀ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ"}
      </div>

      <p>
        {language === "en"
          ? "Seva Samithi (R) Padavu Mugrody"
          : "ಸೇವಾ ಸಮಿತಿ (ರಿ) ಪದವು ಮುಗ್ರೋಡಿ"}
      </p>

      <p className="blessing">
        🙏{" "}
        {language === "en"
          ? "May Goddess Durga Parameshwari Bless You"
          : "ಶ್ರೀ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ ದೇವಿಯ ಆಶೀರ್ವಾದ ನಿಮ್ಮ ಮೇಲೆ ಇರಲಿ"}{" "}
        🙏
      </p>

      <div className="copyright">
        {language === "en"
          ? "© 2026 Shree Durga Parameshwari Mandira. All Rights Reserved."
          : "© 2026 ಶ್ರೀ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ ಮಂದಿರವು. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."}
      </div>
    </footer>
  );
}

export default Footer;