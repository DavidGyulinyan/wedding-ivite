import "./App.css";
import Home from "./components/Home/Home";
import Photos from "./components/Photos/Photos";
import Ceremony from "./components/Ceremony/Ceremony";
import WeddingParty from "./components/WeddingParty/WeddingParty";
import Footer from "./components/Footer/Footer";
import { Link as ScrollLink, Element } from "react-scroll";

function App() {
  return (
    <>
      <Home />
      <div className="app">
        <nav className="menu">
          <ScrollLink
            to="ceremony"
            className="text-center"
            smooth={true}
            duration={500}
          >
            Արարողություն
          </ScrollLink>
          <ScrollLink
            to="party"
            className="text-center"
            smooth={true}
            duration={500}
          >
            Երեկույթ
          </ScrollLink>
        </nav>
      </div>
      <Element name="photos">
        <Photos />
      </Element>
      <Element name="ceremony">
        <Ceremony />
      </Element>
      <Element name="party">
        <WeddingParty />
      </Element>
      <Footer />
    </>
  );
}

export default App;
