import { Link } from "react-router-dom";
import roomsData from "../data/roomsData";
import "./Home.css";

function Home() {
  const previewRooms = roomsData.slice(0, 3);

  return (
    <main className="home" role="main">
      {/* HERO SECTION */}
      <section className="hero page-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-tagline">
            Comfortable Stay Near Khajuraho Temples
          </span>

          <h1>Hotel Dream Inn Khajuraho</h1>

          <p>
            A budget-friendly and premium hotel near Khajuraho Temples offering
            clean rooms, modern amenities and warm hospitality for families,
            couples and solo travelers.
          </p>

          <a
            href="https://www.booking.com/hotel/in/dream-inn-khajuraho.en-gb.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            aria-label="Book Hotel Dream Inn Khajuraho"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about page-section">
        <h2>Welcome to Hotel Dream Inn Khajuraho</h2>

        <p>
          Hotel Dream Inn Khajuraho is a comfortable hotel located near the
          famous UNESCO World Heritage Khajuraho Temples. We are known for our
          clean rooms, peaceful environment and excellent guest service.
        </p>

        <p>
          Whether you are visiting Khajuraho for sightseeing, pilgrimage or a
          relaxing holiday, our hotel provides an ideal stay with easy access to
          major attractions.
        </p>

        <Link to="/rooms" className="about-link">
          Explore Our Rooms →
        </Link>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="rooms-preview page-section">
        <h2>Our Rooms</h2>

        <div className="rooms-grid">
          {previewRooms.map((room) => (
            <article className="room-card" key={room.id}>
              <img
                src={room.image}
                alt={`${room.name} at Hotel Dream Inn Khajuraho`}
                loading="lazy"
                width="400"
                height="260"
              />

              <div className="room-content">
                <h3>{room.name}</h3>
                <span className="room-no">{room.roomNo}</span>

                <p>{room.shortDesc}</p>

                <div className="room-actions">
                  <Link
                    to={`/rooms/${room.id}`}
                    className="details-btn"
                    aria-label={`View details of ${room.name}`}
                  >
                    View Details
                  </Link>

                  <a
                    href="https://www.booking.com/hotel/in/dream-inn-khajuraho.en-gb.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-btn"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* VIEW ALL ROOMS */}
        <div className="view-all-wrapper">
          <Link to="/rooms" className="view-all-btn">
            View All Rooms
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta page-section">
        <h2>Book Your Stay at Hotel Dream Inn Khajuraho</h2>

        <p>
          Experience comfort, cleanliness and great hospitality at one of the
          best hotels near Khajuraho Temples.
        </p>

        <a
          href="https://www.booking.com/hotel/in/dream-inn-khajuraho.en-gb.html"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Book Now
        </a>
      </section>
    </main>
  );
}

export default Home;
