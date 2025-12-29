import "./About.css";

function About() {
  return (
    <section className="about-page">
      {/* HERO SECTION */}
      <div className="about-hero">
        <h1>About Hotel Dream Inn Khajuraho</h1>
        <p>Comfortable Stay Near Khajuraho Temples with Modern Amenities</p>
      </div>

      {/* CONTENT */}
      <div className="about-content">
        <article className="about-text">
          <h2>Welcome to Hotel Dream Inn Khajuraho</h2>
          <p>
            Hotel Dream Inn Khajuraho is a comfortable and budget-friendly hotel
            located close to the world-famous Khajuraho Temples, a UNESCO World
            Heritage Site. Our hotel is designed to provide a peaceful and
            relaxing stay for tourists, families, couples, and business
            travelers visiting Khajuraho.
          </p>

          <p>
            We believe in offering clean rooms, friendly service, and a homely
            atmosphere at affordable prices. Whether you are visiting Khajuraho
            for sightseeing, cultural exploration, or a short business trip,
            Hotel Dream Inn ensures a pleasant and memorable stay.
          </p>

          <h3>Why Choose Hotel Dream Inn?</h3>
          <ul>
            <li>Prime location near Khajuraho temples</li>
            <li>Clean and spacious rooms</li>
            <li>Friendly and cooperative staff</li>
            <li>Free Wi-Fi and essential amenities</li>
            <li>Affordable pricing with great comfort</li>
          </ul>

          <p>
            Our goal is to make your stay comfortable, safe, and enjoyable. We
            look forward to welcoming you and making your visit to Khajuraho a
            truly special experience.
          </p>
        </article>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
            alt="Hotel Dream Inn Khajuraho Rooms and Exterior View"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
