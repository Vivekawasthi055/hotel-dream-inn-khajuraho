import { useState, useRef, useEffect } from "react";
import "./Gallery.css";
import galleryData from "../data/hotelGalleryData";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [activeItem, setActiveItem] = useState(null);

  const filteredData =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.dataset.src) {
              el.src = el.dataset.src;
              el.removeAttribute("data-src");
            }
            observer.unobserve(el);
          }
        });
      },
      { rootMargin: "200px" }
    );

    videoRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredData]);

  const currentIndex = filteredData.findIndex((i) => i.id === activeItem?.id);
  const nextItem = () =>
    setActiveItem(filteredData[(currentIndex + 1) % filteredData.length]);
  const prevItem = () =>
    setActiveItem(
      filteredData[
        (currentIndex - 1 + filteredData.length) % filteredData.length
      ]
    );

  const handleYouTubeClick = (item) => setActiveItem(item);

  return (
    <div className="gallery page-section">
      <h1>Hotel Dream Inn Khajuraho Gallery</h1>
      <p className="gallery-subtitle">
        Explore our rooms, hotel spaces, and amenities
      </p>

      {/* Filters */}
      <div className="gallery-filters">
        {["all", "rooms", "spaces"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? "active" : ""}
          >
            {cat === "all" ? "All" : cat === "rooms" ? "Rooms" : "Spaces"}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredData.map((item, idx) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() =>
              item.type === "youtube"
                ? handleYouTubeClick(item)
                : setActiveItem(item)
            }
          >
            {item.type === "image" && (
              <img src={item.url} alt={item.alt} loading="lazy" />
            )}

            {item.type === "video" && (
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                data-src={item.url}
                muted
                controls
                preload="metadata"
              />
            )}

            {item.type === "youtube" && (
              <div className="youtube-lazy">
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                  alt={item.alt}
                  loading="lazy"
                />
                <button className="youtube-play-btn">▶</button>
              </div>
            )}

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeItem && (
        <div className="lightbox" onClick={() => setActiveItem(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {activeItem.type === "image" && (
              <img src={activeItem.url} alt={activeItem.alt} />
            )}
            {activeItem.type === "video" && (
              <video src={activeItem.url} controls autoPlay />
            )}
            {activeItem.type === "youtube" && (
              <iframe
                src={`https://www.youtube.com/embed/${activeItem.videoId}?autoplay=1`}
                title={activeItem.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            <h3>{activeItem.title}</h3>
            <p>{activeItem.location}</p>

            <button className="lightbox-prev" onClick={prevItem}>
              ‹
            </button>
            <button className="lightbox-next" onClick={nextItem}>
              ›
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="gallery-cta">
        <h2>Ready to Book Your Stay?</h2>
        <div className="cta-buttons">
          <a
            href="https://www.booking.com/hotel/in/dream-inn-khajuraho.en-gb.html"
            className="cta-btn"
            target="_blank"
          >
            Book Now
          </a>
          <a href="tel:+919179227154" className="cta-btn customize">
            Call Hotel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
