import { createContext, useState} from "react";
import tracksList from '../assets/trecksList'

const audio = new Audio()

export const AudioContext = createContext({})

const AudioProvider = ({children}) => {
    const [currentTrack, setCurrentTrack] = useState(tracksList[0])
    const [isPlaying, setPlayning] = useState(false)

    const handleToggleAudio = (track) => {
        if(currentTrack.id !== track.id) {
            setCurrentTrack(track)
            setPlayning(true)

            audio.src = track.src;
            audio.currentTime = 0
            audio.play()

            return
        }


        if(isPlaying) {
            audio.pause();
            setPlayning(false)
        } else {
            audio.play()
            setPlayning(true)
        }
    }

    const value = { audio, currentTrack, isPlaying, handleToggleAudio}

    return <AudioContext.Provider value = {value}>{children}</AudioContext.Provider>
}

export default AudioProvider