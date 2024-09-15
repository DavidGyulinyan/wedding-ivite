import React, { useState, useRef, useEffect } from "react";
import audio from "../../assets/audio/L'appuntamento.mp3";
import play from "../../assets/icons/play.svg";
import stop from "../../assets/icons/pause.svg";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const currentProgress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <div className="font-arm text-2xl text-white w-full h-[9rem] flex flex-col justify-end items-center gap-2">
      <span className="text-3xl">Երաժշտություն</span>
      <audio ref={audioRef} src={audio} />
      <button onClick={togglePlay} className="pt-2">
        <img
          src={isPlaying ? stop : play}
          alt="Sound Icon"
          className="w-14 h-14"
        />
      </button>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default MusicPlayer;
