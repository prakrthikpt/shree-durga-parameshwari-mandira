function Balagokula({ language, setSelectedImage, setSelectedVideo }) {
  return (
    <section id="balagokula" className="section">

      <div className="section-title">
        <p>
          {language === "en"
            ? "CULTURE & VALUES"
            : "ಸಂಸ್ಕೃತಿ ಮತ್ತು ಮೌಲ್ಯಗಳು"}
        </p>

        <h2>
          {language === "en"
            ? "Balagokula"
            : "ಬಾಲಗೋಕುಲ"}
        </h2>
      </div>

      <div className="gallery-grid">

        {/* Balagokula Image 1 */}
        <div
          className="gallery-item"
          onClick={() =>
            setSelectedImage("/images/balagokula1.jpeg")
          }
        >
          <img
            src="/images/balagokula1.jpeg"
            alt={
              language === "en"
                ? "Balagokula"
                : "ಬಾಲಗೋಕುಲ"
            }
          />
        </div>

        {/* Balagokula Image 2 */}
        <div
          className="gallery-item"
          onClick={() =>
            setSelectedImage("/images/balagokula2.jpeg")
          }
        >
          <img
            src="/images/balagokula2.jpeg"
            alt={
              language === "en"
                ? "Balagokula"
                : "ಬಾಲಗೋಕುಲ"
            }
          />
        </div>

        {/* Balagokula Image 3 */}
        <div
          className="gallery-item"
          onClick={() =>
            setSelectedImage("/images/balagokula3.jpeg")
          }
        >
          <img
            src="/images/balagokula3.jpeg"
            alt={
              language === "en"
                ? "Balagokula"
                : "ಬಾಲಗೋಕುಲ"
            }
          />
        </div>

        {/* Balagokula Video */}
        <div
          className="gallery-item"
          onClick={() =>
            setSelectedVideo("/videos/balagokula.mp4")
          }
        >
          <video
            src="/videos/balagokula.mp4"
            muted
            preload="metadata"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />

          <div className="video-label">
            ▶
          </div>
        </div>

      </div>

    </section>
  );
}

export default Balagokula;