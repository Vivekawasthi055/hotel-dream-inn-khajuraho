import "./NearbyAttractions.css";

function NearbyAttractions() {
  const places = [
    {
      name: "Khajuraho Group of Monuments",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Khajuraho_Group_of_Monuments_4.jpg",
      distance: "1.5 km",
      description:
        "A UNESCO World Heritage Site, famous for its stunning ancient temples and intricate sculptures. One of the most visited tourist attractions in Madhya Pradesh.",
    },
    {
      name: "Kandariya Mahadev Temple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Khajuraho.KandariyaMahadeva.jpg/1280px-Khajuraho.KandariyaMahadeva.jpg",
      distance: "1.8 km",
      description:
        "The largest and most ornate temple in Khajuraho, dedicated to Lord Shiva, known for its remarkable Nagara-style architecture.",
    },
    {
      name: "Lakshmana Temple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Khajuraho-Lakshmana_temple.JPG",
      distance: "1.6 km",
      description:
        "An ancient temple dedicated to Lord Vishnu, built in the 10th century and admired for its detailed carvings and spiritual atmosphere.",
    },
    {
      name: "Raneh Falls",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/cc/e5/05/beautiful-khajuraho.jpg?w=1200&h=700&s=1",
      distance: "20 km",
      description:
        "A beautiful natural canyon waterfall on the Ken River, famous for its colorful volcanic rocks and scenic views.",
    },
    {
      name: "Panna National Park",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
      distance: "25 km",
      description:
        "A popular wildlife sanctuary near Khajuraho, known for tigers, leopards, and rich flora & fauna.",
    },
    {
      name: "Dulhadev Temple",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/duladeo-temple-khajuraho-madhya-pradesh-khajuraho-1-attr-hero?qlt=82&ts=1727355492714",
      distance: "3 km",
      description:
        "One of the last temples built in Khajuraho, dedicated to Lord Shiva and known for its peaceful surroundings.",
    },
  ];

  return (
    <section className="attractions-page page-section">
      <h1>Nearby Attractions Around Hotel Dream Inn Khajuraho</h1>

      <p className="attractions-intro">
        Staying at Hotel Dream Inn Khajuraho gives you easy access to the most
        famous tourist attractions of Khajuraho and nearby areas. Explore UNESCO
        heritage temples, scenic waterfalls, and wildlife destinations located
        just a short distance from our hotel.
      </p>

      <div className="attractions-grid">
        {places.map((place, index) => (
          <div className="attraction-card" key={index}>
            <div className="image-wrapper">
              <img
                src={place.image}
                alt={`${place.name} near Hotel Dream Inn Khajuraho`}
                loading="lazy"
              />
            </div>

            <div className="attraction-content">
              <h2>{place.name}</h2>
              <span className="distance">📍 {place.distance} from hotel</span>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NearbyAttractions;
