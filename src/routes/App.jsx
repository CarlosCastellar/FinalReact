import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Home from "../containers/Home";
import Contact from "../containers/Contacto";
import Favorites from "../containers/Favorites";
import NotFound from "../containers/NotFound";
import Detail from "../containers/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
