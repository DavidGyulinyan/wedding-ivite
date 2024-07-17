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

  const days = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30],
  ];

  return (
    <>
      <div className="home">
        <div className="home-content">
          <span className="couple font-arm text-center flex justify-center items-center">
            Դավիթի և Նունեի պսակադրության արարողությունը տեղի կունենա
          </span>
          <section className="conteiner font-arm">
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
        <div className="flex flex-col items-center justify-center min-h-[23rem] bg-transparent text-white px-1">
          <span className="font-arm text-3xl py-3">Նոյեմբեր</span>
          <div className="grid grid-cols-7 gap-3 text-md">
            {days.map((week, weekIndex) =>
              week.map((day, dayIndex) => (
                <div
                  key={weekIndex * 7 + dayIndex}
                  className={`flex items-center justify-center w-10 h-10 rotate-1 ${
                    day === 3 ? "border-2 border-white rounded-full " : ""
                  }`}
                >
                  {day}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
