import React, { useEffect, useState, useRef } from "react";
import audio from "../../assets/audio/Bruno-Mars-Marry-You.mp3";
import play from "../../assets/icons/play.svg";
import stop from "../../assets/icons/pause.svg";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !audioRef.current.playing) {
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error);
          setIsPlaying(false);
        });
      }
      window.removeEventListener("click", handleUserInteraction);
    };

    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Playback failed:", error);
        setIsPlaying(false);
        window.addEventListener("click", handleUserInteraction);
      });
    }

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="font-arm text-2xl mt-10 w-full h-21 flex flex-col justify-end items-center gap-3">
      <span>Երաժշտություն</span>
      <audio ref={audioRef} src={audio} autoPlay />
      <button onClick={togglePlay} className="p-2">
        <img
          src={isPlaying ? stop : play}
          alt="Sound Icon"
          className="w-14 h-14"
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
