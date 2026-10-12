function Tabla({ language, setSelectedImage }) {
  return (
    <section id="tabla" className="section">

      <div className="section-title">
        <p>
          {language === "en"
            ? "TRADITIONAL MUSIC"
            : "ಸಾಂಪ್ರದಾಯಿಕ ಸಂಗೀತ"}
        </p>

        <h2>
          {language === "en"
            ? "Tabla"
            : "ತಬಲಾ"}
        </h2>
      </div>

      <div className="gallery-grid">

        {/* Tabla Image 1 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/tabla1.jpeg")}
        >
          <img
            src="/images/tabla1.jpeg"
            alt={
              language === "en"
                ? "Tabla"
                : "ತಬಲಾ"
            }
          />
        </div>

        {/* Tabla Image 2 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/tabla2.jpeg")}
        >
          <img
            src="/images/tabla2.jpeg"
            alt={
              language === "en"
                ? "Tabla"
                : "ತಬಲಾ"
            }
          />
        </div>

        {/* Tabla Image 3 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/tabla3.jpeg")}
        >
          <img
            src="/images/tabla3.jpeg"
            alt={
              language === "en"
                ? "Tabla"
                : "ತಬಲಾ"
            }
          />
        </div>

      </div>

    </section>
  );
}

export default Tabla;