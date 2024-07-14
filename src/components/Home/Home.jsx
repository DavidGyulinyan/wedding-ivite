import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-11-03T00:00:00Z");
    const now = new Date();
    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = {
    days: "օր",
    hours: "ժամ",
    minutes: "րոպե",
    seconds: "վայրկյանից",
  };

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <>
      <div className="home">
        <div className="home-content">
          <span className="couple text-center flex justify-center items-center">
            Սիրով հրավիրում ենք Ձեզ Դավիթի և Նունեի պսակադրության արարողությանը,
            որը տեղի կունենա
          </span>
          <section className="conteiner">
            <span>
              {formatTime(timeLeft.days)} {timeUnits.days}{" "}
            </span>
            <span>
              {formatTime(timeLeft.hours)} {timeUnits.hours}{" "}
            </span>
            <span>
              {formatTime(timeLeft.minutes)} {timeUnits.minutes}{" "}
            </span>
            <span>
              {formatTime(timeLeft.seconds)} {timeUnits.seconds}{" "}
            </span>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
