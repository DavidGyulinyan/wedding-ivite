import "./App.css";
import Home from "./components/Home/Home";
import Photos from "./components/Photos/Photos";
import Ceremony from "./components/Ceremony/Ceremony";
import WeddingParty from "./components/WeddingParty/WeddingParty";
import Footer from "./components/Footer/Footer";
import { Link as ScrollLink, Element } from "react-scroll";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  return (
    <>
      <Home />
      <MusicPlayer />

      <div className="app">
        <nav className="menu flex flex-col justify-center items-center">
          <span className="font-arm text-2xl lg:text-3xl xl:text-3xl text-center flex justify-center items-center p-7 lg:w-4/5 xl:w-3/5">
            Սիրելի բարեկամներ և ընկերներ, մեր կյանքում շուտով կգա մի նոր փուլ,
            մենք պատրաստվում ենք միավորել մեր սրտերն ու ապրել մեր կյանքի
            ամենալուսավոր օրերից մեկը: Հրավիրում ենք Ձեզ կիսելու մեզ հետ այս
            անմոռանալի արարողությունը՝ դարձնելով մեր օրը ավելի վառ և գեղեցիկ Ձեր
            ներկայությամբ։
          </span>
          <div className="w-96 flex max-sm:flex-col justify-around cursor-pointer gap-5">
            <ScrollLink
              to="ceremony"
              className="text-center text-3xl lg:text-3xl xl:text-3xl"
              smooth={true}
              duration={500}
            >
              Արարողություն
            </ScrollLink>
            <ScrollLink
              to="party"
              className="text-center text-3xl lg:text-3xl xl:text-3xl"
              smooth={true}
              duration={500}
            >
              Երեկույթ
            </ScrollLink>
          </div>
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
