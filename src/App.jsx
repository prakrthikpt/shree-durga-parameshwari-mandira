
import { useState,useEffect } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import About from "./pages/About";
import Home from "./pages/Home";
import Pooja from "./pages/Pooja";
import Events from "./pages/Events";
import Classes from "./pages/Classes";
import Bhajan from "./pages/activities/Bhajan";
import Harmonium from "./pages/activities/Harmonium";
import Tabla from "./pages/activities/Tabla";
import Balagokula from "./pages/activities/Balagokula";
import Yoga from "./pages/activities/Yoga";
import RSS from "./pages/activities/RSS.jsx";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MediaPopup from "./components/MediaPopup";
import Footer from "./components/Footer";
import TempleMarquee from "./components/TempleMarquee";
import Members from "./pages/Members";

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
                      <span className="temple-logo">🛕</span>
            <span className="logo-divider"></span>

                      <span className="logo-text">
              {language === "en"
                ? "Sri Durgaparameshwari Seva Samithi(R),MUGRODI"
                : "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಸೇವಾ ಸಮಿತಿ(ರಿ), ಮುಗ್ರೋಡಿ"}
            </span>
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

          <a
            href="#members"
            onClick={() => {
              setCurrentPage("members");
              setMenuOpen(false);
            }}
          >
            {language === "en" ? "Members" : "ಸದಸ್ಯರು"}
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
          
            <div className="language-switch">
              <button
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
              >
                English
              </button>

              <button
                className={language === "kn" ? "active" : ""}
                onClick={() => setLanguage("kn")}
              >
                ಕನ್ನಡ
              </button>
            </div>
   
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </header>

      <TempleMarquee language={language} />

    {currentPage === "home" && (
      <Home
        language={language}
        setCurrentPage={setCurrentPage}
      />
    )}  

    {currentPage === "about" && (
      <About language={language} />
    )}

    {currentPage === "members" && (
      <Members language={language} />
    )}

    {currentPage === "pooja" && (
      <Pooja language={language} />
    )}  
    
    {currentPage === "events" && (
      <Events language={language} />
    )}    

    {currentPage === "classes" && (
      <Classes
        language={language}
        setCurrentPage={setCurrentPage}
      />
    )}

    {currentPage === "bhajan" && (
      <Bhajan
        language={language}
        setSelectedImage={setSelectedImage}
      />
    )}

    {currentPage === "rss" && (
      <RSS
        language={language}
        setSelectedImage={setSelectedImage}
      />
    )}

    {currentPage === "harmonium" && (
      <Harmonium
        language={language}
        setSelectedImage={setSelectedImage}
      />
    )}

    {currentPage === "tabla" && (
      <Tabla
        language={language}
        setSelectedImage={setSelectedImage}
      />
    )}

    {currentPage === "balagokula" && (
      <Balagokula
        language={language}
        setSelectedImage={setSelectedImage}
            setSelectedVideo={setSelectedVideo}
      />
    )}

    {currentPage === "yoga" && (
      <Yoga
        language={language}
        setSelectedImage={setSelectedImage}
      />
    )}
    
    {currentPage === "gallery" && (
      <Gallery
        language={language}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
    )}

    {currentPage === "contact" && (
      <Contact language={language} />
    )}

    <MediaPopup
      language={language}
      selectedImage={selectedImage}
      setSelectedImage={setSelectedImage}
      selectedVideo={selectedVideo}
      setSelectedVideo={setSelectedVideo}
    />

    <Footer language={language} />

    <Analytics />


    </div>
  );
}

export default App;