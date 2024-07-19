import React, { useState, useEffect } from "react";
import ringsIcon from "../../assets/images/il_794xN.5455602734_47ls.svg";
import "./Home.css";

const Home = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-11-03T15:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
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
    seconds: "վայրկյան",
  };

  const formatTime = (value) => String(value).padStart(2, "0");

  const days = [
    [" ", " ", " ", " ", 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30],
  ];

  return (
    <>
      <div className="home">
        <div className="home-content">
          {timeLeft ? (
            <>
              <span className="couple font-arm text-center flex justify-center items-center">
                Դավիթ և Նունե
              </span>
              <img
                src={ringsIcon}
                className="w-44 h-44 my-6"
                alt="Rings Icon"
              />

              <section className="conteiner font-arm">
                {timeLeft.days > 0 && (
                  <span>
                    {formatTime(timeLeft.days)} {timeUnits.days}{" "}
                  </span>
                )}
                {timeLeft.hours > 0 && (
                  <span>
                    {formatTime(timeLeft.hours)} {timeUnits.hours}{" "}
                  </span>
                )}
                {timeLeft.minutes > 0 && (
                  <span>
                    {formatTime(timeLeft.minutes)} {timeUnits.minutes}{" "}
                  </span>
                )}
                <span>
                  {formatTime(timeLeft.seconds)} {timeUnits.seconds}{" "}
                </span>
              </section>
            </>
          ) : (
            <div className="congratulations font-arm text-center text-4xl">
              Դավիթի և Նունեի պսակադրության արարողությունը արդեն կայացել է,
              շնորհակալություն ներկայության համար:
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center min-h-[23rem] bg-transparent text-white px-1">
          <span className="font-arm text-3xl my-8">Նոյեմբեր</span>
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
