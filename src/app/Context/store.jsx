'use client'
import { createContext,Dispatch , SetStateAction, useContext, useState} from "react"
const Audio = createContext({
    isPlaying: true,
    setIsPlaying:()=>{}
    
})

export const ContextProvider =({children})=>{
    const [isPlaying, setIsPlaying]= useState(true) 
    const setAudioIsPlaying = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
      };
    return (
        <Audio.Provider value={{isPlaying, setIsPlaying: setAudioIsPlaying}}>{children}</Audio.Provider>
    )
}

export const useAudioContext = ()=>useContext(Audio)