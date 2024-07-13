import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Photos from "./components/Photos/Photos";
import Ceremony from "./components/Ceremony/Ceremony";
import WeddingParty from "./components/WeddingParty/WeddingParty";

function App() {
  return (
    <>
      <Home />
      <Router>
        <div className="app">
          {/* Navigation Menu */}
          <nav className="menu">
            <Link to="/photos" className="text-center">
              Լուսանկարներ
            </Link>
            <Link to="/ceremony" className="text-center">
              Արարողություն
            </Link>
            <Link to="/party" className="text-center">
              Երեկույթ
            </Link>
          </nav>
          {/* Define Routes */}
          <Routes>
            <Route path="/photos" element={<Photos />} />
            <Route path="/ceremony" element={<Ceremony />} />
            <Route path="/party" element={<WeddingParty />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
