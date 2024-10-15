import React, { useState } from "react";
import "./Home.css"; // Link to the CSS file

const Home = () => {
  // Slider state for both accommodation and things-to-do
  const [accommodationIndex, setAccommodationIndex] = useState(0);
  const [thingsToDoIndex, setThingsToDoIndex] = useState(0);

  // Accommodation slides
  const accommodationSlides = [
    { src: "/accomodation_photos/acc01.png", title: "Ocean View Room", price: "$250/night" },
    { src: "/accomodation_photos/acc02.png", title: "Garden Suite", price: "$300/night" },
    // Add other accommodation slides here
  ];

  // Things to do slides
  const thingsToDoSlides = [
    { src: "/attraction_photos/att01.png", title: "Sunset Beach", time: "5 minutes away" },
    { src: "/attraction_photos/att02.png", title: "National Park", time: "15 minutes away" },
    // Add other things to do slides here
  ];

  // Functions to change slides for both carousels
  const handlePrevSlide = (setIndex, currentIndex, totalSlides) => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNextSlide = (setIndex, currentIndex, totalSlides) => {
    setIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="hotel-name">
          <h1>Ocean Breeze Hotel</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Accommodations</a></li>
          <li><a href="#">Things to Do</a></li>
          <li><a href="#">Specials</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1>Welcome to Ocean Breeze Hotel</h1>
          <p>Your Perfect Oceanfront Getaway</p>
        </div>
      </header>

      {/* Accommodation Section */}
      <section className="accommodation">
        <h2>Our Rooms & Suites</h2>
        <div className="slider-container">
          <button
            className="prev-btn"
            onClick={() => handlePrevSlide(setAccommodationIndex, accommodationIndex, accommodationSlides.length)}
          >
            &#10094;
          </button>
          <div className="slider" style={{ transform: `translateX(${-accommodationIndex * 100}%)` }}>
            {accommodationSlides.map((slide, index) => (
              <div className="slide" key={index}>
                <img src={slide.src} alt={slide.title} />
                <div className="info">
                  <h3>{slide.title}</h3>
                  <p>{slide.price}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="next-btn"
            onClick={() => handleNextSlide(setAccommodationIndex, accommodationIndex, accommodationSlides.length)}
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="things-to-do">
        <h2>Explore Nearby Attractions</h2>
        <div className="slider-container">
          <button
            className="prev-btn"
            onClick={() => handlePrevSlide(setThingsToDoIndex, thingsToDoIndex, thingsToDoSlides.length)}
          >
            &#10094;
          </button>
          <div className="slider" style={{ transform: `translateX(${-thingsToDoIndex * 100}%)` }}>
            {thingsToDoSlides.map((slide, index) => (
              <div className="slide" key={index}>
                <img src={slide.src} alt={slide.title} />
                <div className="info">
                  <h3>{slide.title}</h3>
                  <p>{slide.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="next-btn"
            onClick={() => handleNextSlide(setThingsToDoIndex, thingsToDoIndex, thingsToDoSlides.length)}
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-name">
          <h2>Ocean Breeze Hotel</h2>
        </div>
        <div className="contact-info">
          <p>Email: info@oceanbreezehotel.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
