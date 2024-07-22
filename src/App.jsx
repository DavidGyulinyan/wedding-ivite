import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Photos from "./components/Photos/Photos";
import Ceremony from "./components/Ceremony/Ceremony";
import WeddingParty from "./components/WeddingParty/WeddingParty";
import Footer from "./components/Footer/Footer";
import { Link as ScrollLink, Element } from "react-scroll";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Home />
      <MusicPlayer />
      <div className="app">
        <nav className="menu flex flex-col justify-center items-center">
          <span className="font-arm text-2xl lg:text-3xl xl:text-3xl text-center flex justify-center items-center px-7 lg:w-4/5 xl:w-3/5">
            Սիրելի' բարեկամներ և ընկերներ, մեր կյանքում շուտով կգա մի նոր փուլ։
            Մենք պատրաստվում ենք ստեղծել նոր ընտանիք` այդ ճանապարհին ապրելով
            կյանքի ամենալուսավոր ու անմոռանալի օրերից մեկը։ Սիրով հրավիրում ենք
            Ձեզ ներկա գտնվելու մեր պսակադրության արարողությանը՝ դարձնելով օրն
            ավելի վառ և գեղեցիկ Ձեր ներկայությամբ։
          </span>
          <div className="w-96 flex max-sm:flex-col justify-around cursor-pointer gap-5 py-10">
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
      <ScrollToTop
        smooth
        className="w-10 h-10 flex justify-center items-center border-opacity-5"
      />
    </>
  );
}

export default App;
