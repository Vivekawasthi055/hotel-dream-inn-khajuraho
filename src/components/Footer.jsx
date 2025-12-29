import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <h3>Hotel Dream Inn Khajuraho</h3>

          <p className="footer-tagline">
            Comfortable & Affordable Stay Near Khajuraho Temples
          </p>

          <address className="footer-address">
            Near Gandhi Chowk, Jain Mandir Road <br />
            Sevagram, Khajuraho <br />
            Madhya Pradesh 471606, India
          </address>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h4>Contact</h4>

          <a href="tel:+919179227154">📞 +91 91792 27154</a>

          <a
            href="https://wa.me/9179227154"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Connect With Us</h4>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/hotel_dream_inn_khajuraho/"
              target="_blank"
              className="insta"
              rel="noopener noreferrer"
            >
              📸 Instagram
            </a>

            <a
              href="https://www.booking.com/hotel/in/dream-inn-khajuraho.en-gb.html"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-book"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Hotel Dream Inn Khajuraho. All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
