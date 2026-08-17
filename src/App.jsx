import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          🛕 <span>Sri Durgaparameshwari Seva Samithi(R),MUGRODI
</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#pooja">Pooja & Seva</a>
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="welcome">🙏 OM SRI DURGA PARAMESHWARI NAMAH 🙏</p>

          <h1>
            Sri Durgaparameshwari
            <br />
            Seva Samithi (R)
          </h1>

          <h2>Padavu Mugrodi </h2>

          <p>
            Welcome to the divine abode of
            <strong> Shree Durga Parameshwari</strong>.
            May the blessings of the Goddess bring peace,
            prosperity and happiness to every devotee.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="btn primary">
              Discover Temple
            </a>

            <a href="#contact" className="btn secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="section-title">
          <p>DIVINE HERITAGE</p>
          <h2>About the Temple</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="temple-symbol">ॐ</div>
          </div>

          <div className="about-text">
            <h3>A Sacred Place of Devotion</h3>

            <p>
              Shree Durga Parameshwari Temple at Register Padavu
              Mugrody is a sacred place where devotees come together
              to seek the blessings of Goddess Durga Parameshwari.
            </p>

            <p>
              The temple represents faith, devotion, tradition and
              spiritual harmony. Devotees visit the temple to offer
              prayers and participate in various religious ceremonies
              and festivals.
            </p>

            <div className="features">
              <div>
                <span>🙏</span>
                <h4>Devotion</h4>
                <p>A place of faith and prayer.</p>
              </div>

              <div>
                <span>🪔</span>
                <h4>Tradition</h4>
                <p>Preserving sacred traditions.</p>
              </div>

              <div>
                <span>🌺</span>
                <h4>Blessings</h4>
                <p>Seek divine blessings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pooja Section */}
      <section id="pooja" className="section pooja">
        <div className="section-title">
          <p>DIVINE SERVICES</p>
          <h2>Pooja & Seva</h2>
        </div>

        <div className="cards">

          <div className="card">
            <div className="card-icon">🪔</div>
            <h3>Deepa Namaskara</h3>
            <p>
              Offer lamps and prayers to seek the divine blessings
              of the Goddess.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🌺</div>
            <h3>Archana</h3>
            <p>
              Participate in sacred archana and offer flowers
              with devotion.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🙏</div>
            <h3>Special Pooja</h3>
            <p>
              Special poojas conducted during important occasions
              and festivals.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🥥</div>
            <h3>Seva</h3>
            <p>
              Participate in temple seva and contribute to the
              spiritual community.
            </p>
          </div>

        </div>
      </section>

      {/* Events */}
      <section id="events" className="section events">
        <div className="section-title">
          <p>CELEBRATIONS</p>
          <h2>Temple Events</h2>
        </div>

        <div className="event-container">

          <div className="event-card">
            <div className="event-date">
              <span>01</span>
              <small>JAN</small>
            </div>

            <div>
              <h3>Annual Temple Festival</h3>
              <p>
                Join devotees in prayer, pooja and cultural
                celebrations.
              </p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span>15</span>
              <small>APR</small>
            </div>

            <div>
              <h3>Special Pooja</h3>
              <p>
                A special occasion for devotees to offer prayers
                to Goddess Durga Parameshwari.
              </p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span>09</span>
              <small>SEP</small>
            </div>

            <div>
              <h3>Navaratri Celebration</h3>
              <p>
                Celebrate the divine power of Goddess Durga
                during Navaratri.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section gallery">
        <div className="section-title">
          <p>DIVINE MOMENTS</p>
          <h2>Temple Gallery</h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">🛕</div>
          <div className="gallery-item">🌺</div>
          <div className="gallery-item">🪔</div>
          <div className="gallery-item">🙏</div>
          <div className="gallery-item">🌸</div>
          <div className="gallery-item">🕉️</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="section-title">
          <p>CONNECT WITH US</p>
          <h2>Temple Information</h2>
        </div>

        <div className="contact-container">

          <div className="contact-card">
            <span>📍</span>
            <h3>Location</h3>
            <p>
              Register Padavu Mugrody
            </p>
          </div>

          <div className="contact-card">
            <span>🕘</span>
            <h3>Temple Timings</h3>
            <p>
              Morning: 6:00 AM – 12:00 PM
              <br />
              Evening: 5:00 PM – 8:00 PM
            </p>
          </div>

          <div className="contact-card">
            <span>📞</span>
            <h3>Contact</h3>
            <p>
              Temple office / Management
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">
          🛕 Shree Durga Parameshwari
        </div>

        <p>
          Register Padavu Mugrody
        </p>

        <p className="blessing">
          🙏 May Goddess Durga Parameshwari Bless You 🙏
        </p>

        <div className="copyright">
          © 2026 Shree Durga Parameshwari Temple. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;