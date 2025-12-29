import { Link } from "react-router-dom";
import roomsData from "../data/roomsData";
import "./Rooms.css";

function Rooms() {
  return (
    <section className="rooms-page page-section">
      <h1>Rooms at Hotel Dream Inn Khajuraho</h1>

      <p className="rooms-intro">
        Hotel Dream Inn Khajuraho offers comfortable and well-designed rooms
        suitable for couples, families, and group travelers. All rooms are
        equipped with modern facilities to ensure a pleasant and relaxing stay
        near the Khajuraho temples.
      </p>

      <div className="rooms-grid">
        {roomsData.map((room) => (
          <div className="room-card" key={room.id}>
            <img
              src={room.image}
              alt={`${room.name} at Hotel Dream Inn Khajuraho`}
              loading="lazy"
            />

            <div className="room-content">
              <h2>{room.name}</h2>
              <span className="room-no">{room.roomNo}</span>
              <p>{room.shortDesc}</p>

              <div className="room-actions">
                <Link to={`/rooms/${room.id}`} className="details-btn">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
