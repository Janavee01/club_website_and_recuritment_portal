"use client"

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="highlight">ICSD CLUB</span>
        </h1>
        <h2 className="hero-subtitle">INTEGRATED CIRCUITS AND SYSTEM DESIGN</h2>
        <p className="hero-description">
          Empowering the next generation of engineers at VIT Chennai <br />
          through innovation, collaboration, and cutting-edge technology
          in integrated circuits and system design.
        </p>

        <button
          className="cta-button"
          onClick={() => {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" })
          }}
        >
          Explore Our Journey
        </button>
      </div>
      <div className="hero-visual">
        <div className="circuit-animation">
          <img 
            src="/images/icsd-logo.png" 
            alt="ICSD Club Logo" 
            className="circuit-image"
          />
        </div>
      </div>
    </section>
  )
}
