
import { useState,useEffect } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  window.scrollTo(0, 0);
}, [currentPage]);
  return (
    <div className="app">

      <header className="navbar">

        <div className="logo">
          🛕 <span>Sri Durgaparameshwari Seva Samithi(R),MUGRODI</span>
        </div>

        {/* Desktop Menu */}
        <nav className={menuOpen ? "mobile-open" : ""}>
      
                <a href="#home" onClick={() => {
            setCurrentPage("home");
            setMenuOpen(false);
          }}>
            {language === "en" ? "Home" : "ಮುಖಪುಟ"}
          </a>

          <a href="#about" onClick={() => {
            setCurrentPage("about");
            setMenuOpen(false);
          }}>
            {language === "en" ? "About" : "ನಮ್ಮ ಬಗ್ಗೆ"}
          </a>

          <a href="#pooja" onClick={() => {
                  setCurrentPage("pooja");
            setMenuOpen(false);
          }}>
                  {language === "en" ? "Pooja & Seva" : "ಪೂಜೆ ಮತ್ತು ಸೇವೆ"}
          </a>

          <a href="#classes" onClick={() => {
            setCurrentPage("classes");
                  setMenuOpen(false);
          }}>
            {language === "en" ? "Classes & Activities" : "ತರಗತಿಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳು"}
                </a>

          <a href="#events" onClick={() => {
            setCurrentPage("events");
            setMenuOpen(false);
          }}>
            {language === "en" ? "Events" : "ಕಾರ್ಯಕ್ರಮಗಳು"}
          </a>

          <a href="#gallery" onClick={() => {
            setCurrentPage("gallery");
                  setMenuOpen(false);
          }}>
            {language === "en" ? "Gallery" : "ಚಿತ್ರಸಂಪುಟ"}
          </a>

          <a href="#contact" onClick={() => {
            setCurrentPage("contact");
            setMenuOpen(false);
          }}>
            {language === "en" ? "Contact" : "ಸಂಪರ್ಕ"}
          </a>

          {/* Language */}
                <button onClick={() => setLanguage("en")}>English</button>

          <button onClick={() => setLanguage("kn")}>ಕನ್ನಡ</button>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </header>

      {/* Hero Section */}
      {currentPage === "home" && (
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
              ):( "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಸೇವಾ ಸಮಿತಿ (ರಿ)")}
          </h1>

          <h2>
            {language === "en"
              ? "Padavu Mugrodi"
              : "ಪಡುವು ಮುಗ್ರೋಡಿ"}
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
        {/* Temple Photo*/}
        <div className="hero-image">
          <img
          src="/temple-home.jpeg"
          alt="Shree Durugraparameshwari Mandira"
          />
        </div>

      </section>
      )}

    {/* About Section */}
{currentPage === "about" && (
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

      <div className="about-image">
        <img
          src="/images/mandira-about.jpeg"
          alt="Sri Durgaparameshwari Temple"
        />
      </div>

      <div className="about-text">

        <h3>
          {language === "en"
            ? "A Sacred Place of Devotion"
            : "ಭಕ್ತಿಯ ಪವಿತ್ರ ಸ್ಥಳ"}
        </h3>

        <p>
          {language === "en"
            ? "We offer our prayers at the feet of Sri Durga Parameshwari Amma. Our Durga Parameshwari Samithi was started in February 1969 and has recently entered its 57th year. "
            : "ಶ್ರೀ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ ಅಮ್ಮನವರ ಪಾದಕ್ಕೆ ವಂದಿಸುತ್ತ. ನಮ್ಮ ಈ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ ಸಮಿತಿಯು 1969ರ ಫೆಬ್ರವರಿ ತಿಂಗಳಲ್ಲಿ ಪ್ರಾರಂಭವಾಗಿ ಇತ್ತೀಚೆಗೆ 57ನೇ ವರ್ಷಕ್ಕೆ ಪದಾರ್ಪಣೆಗೈದಿದೆ."}
        </p>

        <p>
          {language === "en"
            ? "Shree Durga Parameshwari mandira at Register Padavu Mugrody is a sacred place where devotees come together to seek the blessings of Goddess Durga Parameshwari."
            : "ರಿಜಿಸ್ಟರ್ ಪಡುವು ಮುಗ್ರೋಡಿಯಲ್ಲಿರುವ ಶ್ರೀ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ ಮಂದಿರವು ಭಕ್ತರು ಒಟ್ಟಾಗಿ ಸೇರಿ ಶ್ರೀ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ ದೇವಿಯ ಆಶೀರ್ವಾದವನ್ನು ಪಡೆಯುವ ಪವಿತ್ರ ಸ್ಥಳವಾಗಿದೆ."}
        </p>

        <p>
          {language === "en"
            ? "The mandira represents faith, devotion, tradition and spiritual harmony. Devotees visit the temple to offer prayers and participate in various religious ceremonies and festivals."
            : "ಮಂದಿರವು ನಂಬಿಕೆ, ಭಕ್ತಿ, ಸಂಪ್ರದಾಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸಾಮರಸ್ಯವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಭಕ್ತರು ದೇವಸ್ಥಾನಕ್ಕೆ ಬಂದು ಪ್ರಾರ್ಥನೆ ಸಲ್ಲಿಸಿ ವಿವಿಧ ಧಾರ್ಮಿಕ ಸಮಾರಂಭಗಳು ಮತ್ತು ಉತ್ಸವಗಳಲ್ಲಿ ಭಾಗವಹಿಸುತ್ತಾರೆ."}
        </p>

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
)}

      {/* Pooja Section */}
{currentPage === "pooja" && (
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
        <div className="card-icon">🌺</div>

        <h3>
          {language === "en" ? "Hoovina Pooje" : "ಹೂವಿನ ಪೂಜೆ"}
        </h3>

        <p>
          {language === "en"
            ? "Offer lamps and prayers to seek the divine blessings of the Goddess."
            : "ದೇವಿಯ ದೈವಿಕ ಆಶೀರ್ವಾದವನ್ನು ಪಡೆಯಲು ದೀಪ ಮತ್ತು ಪ್ರಾರ್ಥನೆಗಳನ್ನು ಸಲ್ಲಿಸಿ."}
        </p>
      </div>

      <div className="card">
        <div className="card-icon">🥥</div>

        <h3>
          {language === "en" ? "Seva" : "ಸೇವೆ"}
        </h3>

        <p>
          {language === "en"
            ? "Participate in mandira seva and contribute to the spiritual community."
            : "ಮಂದಿರದ ಸೇವೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸಮುದಾಯಕ್ಕೆ ಕೊಡುಗೆ ನೀಡಿ."}
        </p>
      </div>

      <div className="card">
        <div className="card-icon">🙏</div>

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
)}

{/* Classes & Activities */}
{currentPage === "classes" && (
  <section id="classes" className="section">
    <div className="section-title">
      <p>
        {language === "en"
          ? "LEARNING & DEVOTION"
          : "ಕಲಿಕೆ ಮತ್ತು ಭಕ್ತಿ"}
      </p>

      <h2>
        {language === "en"
          ? "Classes & Activities"
          : "ತರಗತಿಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳು"}
      </h2>
    </div>

    <div className="cards">

      {/* Bhajan */}
      <div
        className="card"
        onClick={() => setCurrentPage("bhajan")}
        style={{ cursor: "pointer" }}
      >
        <div className="card-icon">🎶</div>
        <h3>{language === "en" ? "Bhajan" : "ಭಜನೆ"}</h3>
        <p>
          {language === "en"
            ? "Devotional bhajan classes."
            : "ಭಕ್ತಿಗೀತೆಗಳ ಭಜನಾ ತರಗತಿಗಳು."}
        </p>
      </div>

      {/* Harmonium */}
      <div
        className="card"
        onClick={() => setCurrentPage("harmonium")}
        style={{ cursor: "pointer" }}
      >
        <div className="card-icon">🎹</div>
        <h3>{language === "en" ? "Harmonium" : "ಹಾರ್ಮೋನಿಯಂ"}</h3>
        <p>
          {language === "en"
            ? "Learn harmonium and devotional music."
            : "ಹಾರ್ಮೋನಿಯಂ ಮತ್ತು ಭಕ್ತಿಗೀತೆಗಳ ಕಲಿಕೆ."}
        </p>
      </div>

      {/* Tabla */}
      <div
        className="card"
        onClick={() => setCurrentPage("tabla")}
        style={{ cursor: "pointer" }}
      >
        <div className="card-icon">🥁</div>
        <h3>{language === "en" ? "Tabla" : "ತಬಲಾ"}</h3>
        <p>
          {language === "en"
            ? "Learn rhythm and traditional percussion."
            : "ಲಯ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವಾದ್ಯ ಕಲಿಕೆ."}
        </p>
      </div>

      {/* Balagokula */}
      <div
        className="card"
        onClick={() => setCurrentPage("balagokula")}
        style={{ cursor: "pointer" }}
      >
        <div className="card-icon">👦</div>
        <h3>{language === "en" ? "Balagokula" : "ಬಾಲಗೋಕುಲ"}</h3>
        <p>
          {language === "en"
            ? "Cultural and traditional activities for children."
            : "ಮಕ್ಕಳಿಗಾಗಿ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಚಟುವಟಿಕೆಗಳು."}
        </p>
      </div>

      {/* Yoga Shiksha */}
      <div
        className="card"
        onClick={() => setCurrentPage("yoga")}
        style={{ cursor: "pointer" }}
      >
        <div className="card-icon">🧘</div>
        <h3>{language === "en" ? "Yoga Shiksha" : "ಯೋಗ ಶಿಕ್ಷಣ"}</h3>
        <p>
          {language === "en"
            ? "Yoga learning for physical and mental well-being."
            : "ದೈಹಿಕ ಮತ್ತು ಮಾನಸಿಕ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಯೋಗ ಶಿಕ್ಷಣ."}
        </p>
      </div>

    </div>
  </section>
)}

{/* Bhajan Page */}
{currentPage === "bhajan" && (
  <section id="bhajan" className="section gallery">

    <div className="section-title">
      <p>
        {language === "en" ? "BHAJAN ACTIVITIES" : "ಭಜನಾ ಚಟುವಟಿಕೆಗಳು"}
      </p>

      <h2>
        {language === "en" ? "Bhajan" : "ಭಜನೆ"}
      </h2>
    </div>

    <div className="gallery-grid">

      {/* Bhajan Photo 1 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/bhajan1.jpeg")}
      >
        <img
          src="/images/bhajan1.jpeg"
          alt={
            language === "en"
              ? "Bhajan Activity"
              : "ಭಜನಾ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Bhajan Photo 2 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/bhajan2.jpeg")}
      >
        <img
          src="/images/bhajan2.jpeg"
          alt={
            language === "en"
              ? "Bhajan Activity"
              : "ಭಜನಾ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Bhajan Photo 3 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/bhajan3.jpeg")}
      >
        <img
          src="/images/bhajan3.jpeg"
          alt={
            language === "en"
              ? "Bhajan Activity"
              : "ಭಜನಾ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      

    </div>

  </section>
)}

{/* Harmonium Page */}
{currentPage === "harmonium" && (
  <section id="harmonium" className="section gallery">

    <div className="section-title">
      <p>
        {language === "en"
          ? "HARMONIUM ACTIVITIES"
          : "ಹಾರ್ಮೋನಿಯಂ ಚಟುವಟಿಕೆಗಳು"}
      </p>

      <h2>
        {language === "en"
          ? "Harmonium"
          : "ಹಾರ್ಮೋನಿಯಂ"}
      </h2>
    </div>

    <div className="gallery-grid">

      {/* Harmonium Photo 1 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/harmonium1.jpeg")}
      >
        <img
          src="/images/harmonium1.jpeg"
          alt={
            language === "en"
              ? "Harmonium Activity"
              : "ಹಾರ್ಮೋನಿಯಂ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Harmonium Photo 2 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/harmonium2.jpeg")}
      >
        <img
          src="/images/harmonium2.jpeg"
          alt={
            language === "en"
              ? "Harmonium Activity"
              : "ಹಾರ್ಮೋನಿಯಂ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Harmonium Photo 3 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/harmonium3.jpeg")}
      >
        <img
          src="/images/harmonium3.jpeg"
          alt={
            language === "en"
              ? "Harmonium Activity"
              : "ಹಾರ್ಮೋನಿಯಂ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      

    </div>

  </section>
)}

{/* Tabla Page */}
{currentPage === "tabla" && (
  <section id="tabla" className="section gallery">

    <div className="section-title">
      <p>
        {language === "en"
          ? "TABLA ACTIVITIES"
          : "ತಬಲಾ ಚಟುವಟಿಕೆಗಳು"}
      </p>

      <h2>
        {language === "en"
          ? "Tabla"
          : "ತಬಲಾ"}
      </h2>
    </div>

    <div className="gallery-grid">

      {/* Tabla Photo 1 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/tabla1.jpeg")}
      >
        <img
          src="/images/tabla1.jpeg"
          alt={
            language === "en"
              ? "Tabla Activity"
              : "ತಬಲಾ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Tabla Photo 2 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/tabla2.jpeg")}
      >
        <img
          src="/images/tabla2.jpeg"
          alt={
            language === "en"
              ? "Tabla Activity"
              : "ತಬಲಾ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Tabla Photo 3 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/tabla3.jpeg")}
      >
        <img
          src="/images/tabla3.jpeg"
          alt={
            language === "en"
              ? "Tabla Activity"
              : "ತಬಲಾ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      

    </div>

  </section>
)}

{/* Balagokula Page */}
{currentPage === "balagokula" && (
  <section id="balagokula" className="section gallery">

    <div className="section-title">
      <p>
        {language === "en"
          ? "BALAGOKULA ACTIVITIES"
          : "ಬಾಲಗೋಕುಲ ಚಟುವಟಿಕೆಗಳು"}
      </p>

      <h2>
        {language === "en"
          ? "Balagokula"
          : "ಬಾಲಗೋಕುಲ"}
      </h2>
    </div>

    <div className="gallery-grid">

      {/* Balagokula Photo 1 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/balagokula1.jpeg")}
      >
        <img
          src="/images/balagokula1.jpeg"
          alt={
            language === "en"
              ? "Balagokula Activity"
              : "ಬಾಲಗೋಕುಲ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Balagokula Photo 2 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/balagokula2.jpeg")}
      >
        <img
          src="/images/balagokula2.jpeg"
          alt={
            language === "en"
              ? "Balagokula Activity"
              : "ಬಾಲಗೋಕುಲ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Balagokula Photo 3 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/balagokula3.jpeg")}
      >
        <img
          src="/images/balagokula3.jpeg"
          alt={
            language === "en"
              ? "Balagokula Activity"
              : "ಬಾಲಗೋಕುಲ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Balagokula Video */}
      <div
        className="gallery-item"
        onClick={() => setSelectedVideo("/videos/balagokula.mp4")}
      >
        <video
          src="/videos/balagokula.mp4"
          muted
          preload="metadata"
          style={{
            width: "100%",
            cursor: "pointer"
          }}
        />
      </div>

    </div>

  </section>
)}

{/* Yoga Shiksha Page */}
{currentPage === "yoga" && (
  <section id="yoga" className="section gallery">

    <div className="section-title">
      <p>
        {language === "en"
          ? "YOGA ACTIVITIES"
          : "ಯೋಗ ಚಟುವಟಿಕೆಗಳು"}
      </p>

      <h2>
        {language === "en"
          ? "Yoga Shiksha"
          : "ಯೋಗ ಶಿಕ್ಷಣ"}
      </h2>
    </div>

    <div className="gallery-grid">

      {/* Yoga Photo 1 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/yoga1.jpeg")}
      >
        <img
          src="/images/yoga1.jpeg"
          alt={
            language === "en"
              ? "Yoga Activity"
              : "ಯೋಗ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Yoga Photo 2 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/yoga2.jpeg")}
      >
        <img
          src="/images/yoga2.jpeg"
          alt={
            language === "en"
              ? "Yoga Activity"
              : "ಯೋಗ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      {/* Yoga Photo 3 */}
      <div
        className="gallery-item"
        onClick={() => setSelectedImage("/images/yoga3.jpeg")}
      >
        <img
          src="/images/yoga3.jpeg"
          alt={
            language === "en"
              ? "Yoga Activity"
              : "ಯೋಗ ಚಟುವಟಿಕೆ"
          }
        />
      </div>

      

    </div>

  </section>
)}
      {/* Events */}
{currentPage === "events" && (
  <section id="events" className="section events">
    <div className="section-title">
      <p>
        {language === "en" ? "CELEBRATIONS" : "ಆಚರಣೆಗಳು"}
      </p>

      <h2>
        {language === "en" ? "Mandira Events" : "ಮಂದಿರದ ಕಾರ್ಯಕ್ರಮಗಳು"}
      </h2>
    </div>

    <div className="event-container">

      {/* Annual Temple Festival */}
      <div className="event-card">
        <div className="event-header">
          <div className="event-icon">🛕</div>

          <h3>
            {language === "en"
              ? "Annual mandira Festival on February"
              : "ವಾರ್ಷಿಕ ಮಂದಿರದ ಉತ್ಸವ ಫೆಬ್ರವರಿ"}
          </h3>
        </div>

        <p>
          {language === "en"
            ? "Join devotees in prayer, pooja and traditional celebrations at our temple."
            : "ನಮ್ಮ ಮಂದಿರದಲ್ಲಿ ಭಕ್ತರೊಂದಿಗೆ ಪ್ರಾರ್ಥನೆ, ಪೂಜೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಆಚರಣೆಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ."}
        </p>
      </div>


      {/* Atidongidina */}
      <div className="event-card">
        <div className="event-header">
          <div className="event-icon">🌺</div>

          <h3>
            {language === "en"
              ? "Atidongidina"
              : "ಆತಿದೊಂಗಿದಿನ"}
          </h3>
        </div>

        <p>
          {language === "en"
            ? "A special traditional celebration observed at the Mandira."
            : "ಮಂದಿರದಲ್ಲಿ ಆಚರಿಸಲಾಗುವ ವಿಶೇಷ ಸಾಂಪ್ರದಾಯಿಕ ಆಚರಣೆ."}
        </p>
      </div>


      {/* Guru Purnima */}
      <div className="event-card">
        <div className="event-header">
          <div className="event-icon">🙏</div>

          <h3>
            {language === "en"
              ? "Guru Purnima Day"
              : "ಗುರು ಪೂರ್ಣಿಮಾ ದಿನ"}
          </h3>
        </div>

        <p>
          {language === "en"
            ? "A day dedicated to expressing gratitude and respect to Gurus."
            : "ಗುರುಗಳಿಗೆ ಕೃತಜ್ಞತೆ ಮತ್ತು ಗೌರವವನ್ನು ಅರ್ಪಿಸುವ ವಿಶೇಷ ದಿನ."}
        </p>
      </div>


      {/* Varalakshmi Pooja */}
      <div className="event-card">
        <div className="event-header">
          <div className="event-icon">🌺</div>

          <h3>
            {language === "en"
              ? "Varalakshmi Pooja"
              : "ವರಲಕ್ಷ್ಮಿ ಪೂಜೆ"}
          </h3>
        </div>

        <p>
          {language === "en"
            ? "A special Varalakshmi Pooja is celebrated at the Mandira with devotion and prayers seeking the blessings of Goddess Varalakshmi."
            : "ವರಲಕ್ಷ್ಮಿ ದೇವಿಯ ಆಶೀರ್ವಾದವನ್ನು ಪಡೆಯಲು ಮಂದಿರದಲ್ಲಿ ಭಕ್ತಿ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯೊಂದಿಗೆ ವಿಶೇಷ ವರಲಕ್ಷ್ಮಿ ಪೂಜೆಯನ್ನು ಆಚರಿಸಲಾಗುತ್ತದೆ."}
        </p>
      </div>


      {/* Raksha Bandhan */}
      <div className="event-card">
        <div className="event-header">
          <div className="event-icon">🪢</div>

          <h3>
            {language === "en"
              ? "Raksha Bandhan"
              : "ರಕ್ಷಾ ಬಂಧನ"}
          </h3>
        </div>

        <p>
          {language === "en"
            ? "Raksha Bandhan is celebrated at the Mandira with devotion, prayers and a spirit of togetherness."
            : "ಮಂದಿರದಲ್ಲಿ ಭಕ್ತಿ, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಸಹೋದರತ್ವದ ಭಾವನೆಯೊಂದಿಗೆ ರಕ್ಷಾ ಬಂಧನವನ್ನು ಆಚರಿಸಲಾಗುತ್ತದೆ."}
        </p>
      </div>


      {/* Gokul Ashtami */}
      <div className="event-card">
        <div className="event-header">
          <div className="event-icon">🦚</div>

          <h3>
            {language === "en"
              ? "Gokul Ashtami"
              : "ಗೋಕೂಲಾಷ್ಟಮಿ"}
          </h3>
        </div>

        <p>
          {language === "en"
            ? "Gokul Ashtami is celebrated with devotional prayers and traditional activities at the Mandira."
            : "ಮಂದಿರದಲ್ಲಿ ಭಕ್ತಿಪೂರ್ವಕ ಪ್ರಾರ್ಥನೆಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ಗೋಕೂಲಾಷ್ಟಮಿಯನ್ನು ಆಚರಿಸಲಾಗುತ್ತದೆ."}
        </p>
      </div>


      {/* Navaratri Celebration */}
      <div className="event-card">
        <div className="event-header">
          <div className="event-icon">🔱</div>

          <h3>
            {language === "en"
              ? "Navaratri Celebration"
              : "ನವರಾತ್ರಿ ಆಚರಣೆ"}
          </h3>
        </div>

        <p>
          {language === "en"
            ? "Celebrate the divine power of Goddess Durga through prayers, pooja and spiritual activities."
            : "ಪ್ರಾರ್ಥನೆ, ಪೂಜೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳ ಮೂಲಕ ದುರ್ಗಾ ದೇವಿಯ ದೈವಿಕ ಶಕ್ತಿಯನ್ನು ಆಚರಿಸಿ."}
        </p>
      </div>


      {/* Deepawali */}
      <div className="event-card">
        <div className="event-header">
          <div className="event-icon">🪔</div>

          <h3>
            {language === "en"
              ? "Deepawali"
              : "ದೀಪಾವಳಿ"}
          </h3>
        </div>

        <p>
          {language === "en"
            ? "Deepawali is celebrated at the Mandira with the lighting of lamps, prayers and devotional activities."
            : "ಮಂದಿರದಲ್ಲಿ ದೀಪ ಬೆಳಗಿಸುವುದು, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಭಕ್ತಿಪೂರ್ವಕ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ದೀಪಾವಳಿಯನ್ನು ಆಚರಿಸಲಾಗುತ್ತದೆ."}
        </p>
      </div>

    </div>
  </section>
)}

      {/* Gallery */}
{currentPage === "gallery" && (
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
      Your browser does not support the video tag.
    </video>
  </div>
)}

</section>
)}

      {/* Contact */}
{currentPage === "contact" && (
  <section id="contact" className="section">
    <div className="section-title">
      <p>
        {language === "en" ? "CONNECT WITH US" : "ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ"}
      </p>

      <h2>
        {language === "en" ? "Mandira Information" : "ಮಂದಿರದ ಮಾಹಿತಿ"}
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
            ? "Sri Durgaparameshwari Seva Samithi(R),MUGRODI, Padavu Mugrodi, Mangaluru, Karnataka"
            : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಸೇವಾ ಸಮಿತಿ (ರಿ), ಮುಗ್ರೋಡಿ, ಪಡುವು ಮುಗ್ರೋಡಿ, ಮಂಗಳೂರು, ಕರ್ನಾಟಕ"}
          </strong>
        </p>
        
        <a
          href="https://maps.app.goo.gl/RfKwrmRKGUHkuf5R7"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          {language === "en"
            ? "View Exact Location on Google Maps"
            : "View Exact Location on Google Maps"}
        </a>
      </div>

      {/* Temple Timings */}
      <div className="contact-card">
        <span>🕘</span>

        <h3>
          {language === "en" ? "Mandira Timings" : "ಮಂದಿರದ ಸಮಯ"}
        </h3>

        <p>
          <strong>

          {language === "en" ? "Friday morning: 6:00 AM – 8:00 PM" : "ಶುಕ್ರವಾರ ಬೆಳಿಗ್ಗೆ: 6:00 AM – 8:00 PM"}
          <br />
          {language === "en" ? "Friday evening: 3:00 PM – 9:30 PM" : "ಶುಕ್ರವಾರ ಸಂಜೆ: 3:00 PM – 9:30 PM"}
          <br />
          {language === "en" ? "Every morning: 6:00 AM – 8:00 AM" : "ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ: 6:00 AM – 8:00 AM"}
          <br />
          {language === "en" ? "Every evening: 5:00 PM – 8:00 PM" : "ಪ್ರತಿದಿನ ಸಂಜೆ: 5:00 PM – 8:00 PM"}
          
          </strong>
        </p>
      </div>

      {/* Contact Number */}
      <div className="contact-card">
        <span>📞</span>

        <h3>
          {language === "en" ? "Contact" : "ಸಂಪರ್ಕ"}
        </h3>

        <p>
          +91 7483603277
        </p>

        <a
          href="tel:+917483603277"
          className="contact-link"
        >
          {language === "en" ? "Call Mandira" : "ಮಂದಿರಕ್ಕೆ ಕರೆ ಮಾಡಿ"}
        </a>
      </div>

    </div>
  </section>
)}

{/* Common Image Popup */}
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
          ? "Activity"
          : "ಚಟುವಟಿಕೆ"
      }
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}

{/* Common Video Popup */}
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
      Your browser does not support the video tag.
    </video>
  </div>
)}

      {/* Footer */}
<footer>
  <div className="footer-logo">
    🛕{" "}
    {language === "en"
      ? "Shree Durga Parameshwari"
      : "ಶ್ರೀ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ"}
  </div>

  <p>
    {language === "en"
      ? "Register Padavu Mugrody"
      : "ರಿಜಿಸ್ಟರ್ ಪಡುವು ಮುಗ್ರೋಡಿ"}
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
      ? "© 2026 Shree Durga Parameshwari Temple. All Rights Reserved."
      : "© 2026 ಶ್ರೀ ದುರ್ಗಾ ಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."}
  </div>
</footer>

<Analytics/>

    </div>
  );
}

export default App;