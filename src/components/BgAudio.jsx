"use client";
import React, { useState, useRef } from "react";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";
import { useAudioContext } from "@/app/Context/store";

const BgAudio = () => {
  const {isPlaying, setIsPlaying} = useAudioContext();
  const audioRef = useRef();

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center ">
      <audio ref={audioRef} autoPlay={isPlaying} loop src="/Assets/editedbg.mp3" />
      <button onClick={playPauseHandler}>
        {isPlaying ? (
          <VscUnmute className=" text-2xl" />
        ) : (
          <IoVolumeMuteSharp className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default BgAudio;
