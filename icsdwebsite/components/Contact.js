export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Connect With Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Join our community and stay updated with the latest events, workshops, and opportunities in integrated
              circuit and system design.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> icsd@vitchennai.ac.in
              </div>
              <div className="contact-item">
                <strong>Location:</strong> VIT Chennai Campus
              </div>
            </div>
          </div>
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/icsd_vitcc?igsh=M3ZyMGtkcDhucnJ4"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <span className="social-icon">📷</span>
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/icsd-vit-chennai/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 ICSD Club - VIT Chennai. All rights reserved.</p>
      </footer>
    </section>
  )
}
