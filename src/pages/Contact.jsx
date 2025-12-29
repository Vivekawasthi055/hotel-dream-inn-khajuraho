import logo from "../assets/logo.png";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappMessage = `Hello Hotel Dream Inn Khajuraho,%0A
Name: ${name}%0A
Phone: ${phone}%0A
Message: ${message}`;

    window.open(`https://wa.me/9179227154?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section className="contact-page page-section">
      <h1>Contact Hotel Dream Inn Khajuraho</h1>

      <p className="contact-intro">
        Get in touch for room bookings, availability, or any travel assistance.
        Conveniently located near Khajuraho temples, offering comfortable stays
        and excellent hospitality.
      </p>

      <div className="contact-logo">
        <img src={logo} alt="Hotel Dream Inn Khajuraho Logo" />
      </div>

      <div className="contact-wrapper">
        {/* CONTACT INFO */}
        <div className="contact-info">
          <h2>Hotel Contact Details</h2>

          <p>
            <strong>📞 Phone / WhatsApp</strong>
            <br />
            <a href="tel:+919179227154">+91 91792 27154</a>
            <br />
            <a href="https://wa.me/9179227154" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </p>

          <p>
            <strong>📧 Email</strong>
            <br />
            <a href="mailto:hoteldreaminnkhajuraho@gmail.com">
              hoteldreaminnkhajuraho@gmail.com
            </a>
          </p>

          <p>
            <strong>📍 Address</strong>
            <br />
            Near Gandhi Chowk, Jain Mandir Rd,
            <br />
            Sevagram, Khajuraho,
            <br />
            Madhya Pradesh 471606
          </p>

          <a
            href="https://www.instagram.com/hotel_dream_inn_khajuraho/"
            target="_blank"
            rel="noreferrer"
            className="instagram-btn"
          >
            Follow on Instagram
          </a>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send via WhatsApp</button>
          </form>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps?q=hotel+dream+inn+khajuraho&output=embed"
          loading="lazy"
          title="Hotel Dream Inn Khajuraho Location"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
