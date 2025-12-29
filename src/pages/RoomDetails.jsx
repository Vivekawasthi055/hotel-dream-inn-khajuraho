import { useParams } from "react-router-dom";
import { useState } from "react";
import roomsFullData from "../data/roomsFullData";
import "./RoomDetails.css";

function RoomDetails() {
  const { id } = useParams();
  const room = roomsFullData[id];
  const [index, setIndex] = useState(0);

  if (!room) {
    return (
      <p style={{ padding: "100px", textAlign: "center" }}>Room not found</p>
    );
  }

  const nextSlide = () => setIndex((prev) => (prev + 1) % room.images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));

  return (
    <section className="room-details page-section">
      <h1>{room.name}</h1>
      <span className="room-number">{room.roomNo}</span>

      {/* Slider */}
      <div className="slider">
        <button className="nav prev" onClick={prevSlide}>
          ‹
        </button>

        <img
          src={room.images[index]}
          alt={`${room.name} at Hotel Dream Inn Khajuraho`}
          loading="lazy"
          className="slide-image"
        />

        <button className="nav next" onClick={nextSlide}>
          ›
        </button>
      </div>

      {/* Content */}
      <p className="description">{room.description}</p>

      <h2>Room Facilities</h2>
      <ul className="facilities">
        {room.facilities.map((item, i) => (
          <li key={i}>
            <span className="facility-icon">✔</span> {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://www.booking.com/hotel/in/dream-inn-khajuraho.en-gb.html"
        target="_blank"
        rel="noopener noreferrer"
        className="book-now"
      >
        Book This Room
      </a>
    </section>
  );
}

export default RoomDetails;
