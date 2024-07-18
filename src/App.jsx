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
        <nav className="menu flex flex-col justify-center items-center">
          <span className="font-arm text-2xl text-center flex justify-center items-center p-5">
            Սիրելի բարեկամներ և ընկերներ, Մեր կյանքում շուտով կգա մի անմոռանալի
            և հիասքանչ պահ: Մենք պատրաստվում ենք միավորել մեր սրտերն ու ապրել
            մեր կյանքի ամենալուսավոր օրերից մեկը: Հրավիրում ենք Ձեզ կիսելու մեզ
            հետ այս անմոռանալի արարողությունը՝ դարձնելով մեր օրը ավելի վառ և
            գեղեցիկ Ձեր ներկայությամբ։
          </span>
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
