import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Gallery from "./pages/Gallery";
import NearbyAttractions from "./pages/NearbyAttractions";
import Contact from "./pages/Contact";
import FloatingActions from "./components/FloatingActions";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/nearby-attractions" element={<NearbyAttractions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingActions />

      <Footer />
    </>
  );
}

export default App;
