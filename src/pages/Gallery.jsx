function Gallery({
  language,
  selectedImage,
  setSelectedImage,
  selectedVideo,
  setSelectedVideo
}) {
  return (
    <section id="gallery" className="section gallery">

      <div className="section-title">
        <p>
          {language === "en" ? "DIVINE MOMENTS" : "ದೈವಿಕ ಕ್ಷಣಗಳು"}
        </p>

        <h2>
          {language === "en" ? "Gallery" : "ಚಿತ್ರಸಂಪುಟ"}
        </h2>
      </div>

      <div className="gallery-grid">

        {/* Photo 64 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery64.jpeg")}
        >
          <img
            src="/images/gallery64.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 63 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery63.jpeg")}
        >
          <img
            src="/images/gallery63.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 62 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery62.jpeg")}
        >
          <img
            src="/images/gallery62.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 61 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery61.jpeg")}
        >
          <img
            src="/images/gallery61.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 60 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery60.jpeg")}
        >
          <img
            src="/images/gallery60.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 59 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery59.jpeg")}
        >
          <img
            src="/images/gallery59.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 58 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery58.jpeg")}
        >
          <img
            src="/images/gallery58.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 57 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery57.jpeg")}
        >
          <img
            src="/images/gallery57.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 56 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery56.jpeg")}
        >
          <img
            src="/images/gallery56.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 55 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery55.jpeg")}
        >
          <img
            src="/images/gallery55.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 54 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery54.jpeg")}
        >
          <img
            src="/images/gallery54.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

         {/* Photo 53 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery53.jpeg")}
        >
          <img
            src="/images/gallery53.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 46 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery46.jpeg")}
      >
        <img
          src="/images/gallery46.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

        {/* Photo 43 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery43.jpeg")}
      >
        <img
          src="/images/gallery43.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 45 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery45.jpeg")}
      >
        <img
          src="/images/gallery45.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

         {/* Photo51  */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery51.jpeg")}
        >
          <img
            src="/images/gallery51.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

         {/* Photo 52 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery52.jpeg")}
        >
          <img
            src="/images/gallery52.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

         {/* Photo 35 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery35.jpeg")}
        >
          <img
            src="/images/gallery35.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 34 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery34.jpeg")}
        >
          <img
            src="/images/gallery34.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 1 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery1.jpeg")}
        >
          <img
            src="/images/gallery1.jpeg"
            alt={
              language === "en"
                ? "Sri Durgaparameshwari Temple"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಮಂದಿರ"
            }
          />
        </div>

        {/* Photo 2 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery2.jpeg")}
        >
          <img
            src="/images/gallery2.jpeg"
            alt={
              language === "en"
                ? "Mandira View"
                : "ಮಂದಿರದ ನೋಟ"
            }
          />
        </div>

        {/* Photo 3 */}
        <div
          className="gallery-item"
          onClick={() => setSelectedImage("/images/gallery3.jpeg")}
        >
            <img
            src="/images/gallery3.jpeg"
            alt={
              language === "en"
                ? "Mandira Pooja"
                : "ಮಂದಿರದ ಪೂಜೆ"
            }
            />
        </div>

      {/* Photo 4 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery4.jpeg")}
      >
        <img
          src="/images/gallery4.jpeg"
          alt={
            language === "en"
              ? "Mandira Festival"
              : "ಮಂದಿರದ ಉತ್ಸವ"
          }
        />
      </div>

      {/* Photo 5 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery5.jpeg")}
      >
        <img
          src="/images/gallery5.jpeg"
          alt={
            language === "en"
              ? "Mandira Celebration"
              : "ಮಂದಿರದ ಆಚರಣೆ"
          }
        />
      </div>

      {/* Photo 6 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery6.jpeg")}
      >
        <img
          src="/images/gallery6.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 7 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery7.jpeg")}
      >
        <img
          src="/images/gallery7.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 8 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery8.jpeg")}
      >
        <img
          src="/images/gallery8.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 9 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery9.jpeg")}
      >
        <img
          src="/images/gallery9.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 10 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery10.jpeg")}
      >
        <img
          src="/images/gallery10.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 11 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery11.jpeg")}
      >
        <img
          src="/images/gallery11.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 12 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery12.jpeg")}
      >
        <img
          src="/images/gallery12.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 13 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery13.jpeg")}
      >
        <img
          src="/images/gallery13.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>
      {/* Photo 14 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery14.jpeg")}
      >
        <img
          src="/images/gallery14.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>
      {/* Photo 15 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery15.jpeg")}
      >
        <img
          src="/images/gallery15.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 16 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery16.jpeg")}
      >
        <img
          src="/images/gallery16.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 17 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery17.jpeg")}
      >
        <img
          src="/images/gallery17.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 37 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery37.jpeg")}
      >
        <img
          src="/images/gallery37.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 41 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery41.jpeg")}
      >
        <img
          src="/images/gallery41.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 50 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery50.jpeg")}
      >
        <img
          src="/images/gallery50.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 44 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery44.jpeg")}
      >
        <img
          src="/images/gallery44.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 47 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery47.jpeg")}
      >
        <img
          src="/images/gallery47.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 48 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery48.jpeg")}
      >
        <img
          src="/images/gallery48.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 49 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery49.jpeg")}
      >
        <img
          src="/images/gallery49.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 42 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery42.jpeg")}
      >
        <img
          src="/images/gallery42.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 40 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery40.jpeg")}
      >
        <img
          src="/images/gallery40.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 36 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery36.jpeg")}
      >
        <img
          src="/images/gallery36.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 38 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery38.jpeg")}
      >
        <img
          src="/images/gallery38.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 39 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery39.jpeg")}
      >
        <img
          src="/images/gallery39.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 18 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery18.jpeg")}
      >
        <img
          src="/images/gallery18.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 19 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery19.jpeg")}
      >
        <img
          src="/images/gallery19.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 20 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery20.jpeg")}
      >
        <img
          src="/images/gallery20.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 21 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery21.jpeg")}
      >
        <img
          src="/images/gallery21.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 22 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery22.jpeg")}
      >
        <img
          src="/images/gallery22.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 23 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery23.jpeg")}
      >
        <img
          src="/images/gallery23.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 24 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery24.jpeg")}
      >
        <img
          src="/images/gallery24.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 25 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery25.jpeg")}
      >
        <img
          src="/images/gallery25.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 26 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery26.jpeg")}
      >
        <img
          src="/images/gallery26.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 27 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery27.jpeg")}
      >
        <img
          src="/images/gallery27.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 28 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery28.jpeg")}
      >
        <img
          src="/images/gallery28.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 29 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery29.jpeg")}
      >
        <img
          src="/images/gallery29.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 30 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery30.jpeg")}
      >
        <img
          src="/images/gallery30.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 31 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery31.jpeg")}
      >
        <img
          src="/images/gallery31.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 32 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery32.jpeg")}
      >
        <img
          src="/images/gallery32.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

      {/* Photo 33 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/gallery33.jpeg")}
      >
        <img
          src="/images/gallery33.jpeg"
          alt={
            language === "en"
              ? "Mandira Devotees"
              : "ಮಂದಿರದ ಭಕ್ತರು"
          }
        />
      </div>

    

      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="close-popup"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt={
              language === "en"
                ? "Mandira Gallery"
                : "ಮಂದಿರದ ಚಿತ್ರಸಂಪುಟ"
            }
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Popup */}
      {selectedVideo && (
        <div
          className="image-popup"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="close-popup"
            onClick={() => setSelectedVideo(null)}
          >
            ✕
          </button>

          <video
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "80vh",
              borderRadius: "15px"
            }}
          >
            <source src={selectedVideo} type="video/mp4" />
          </video>
        </div>
      )}

    </section>
  );
}

export default Gallery;