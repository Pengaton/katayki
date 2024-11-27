import { useState, useEffect } from 'react'
import soundFile from './assets/thank-you-katayki.mp3'
import Img from './assets/katayki.jpg'

import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio] = useState(new Audio(soundFile))

  // Play or pause the audio when the user clicks the button
  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.loop = true
      audio.play().catch((error) => {
        console.error('Autoplay failed:', error)
      })
    }
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    // Clean up audio when component unmounts
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [audio])

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-center gap-4 w-full pt-4 px-4 sm:px-8">
        <p className="text-xl text-white text-center sm:text-left">Buy here:</p>{' '}
        <a href="https://pump.fun/coin/Fx3SkomgYuRkgCJJdhESp4FfcrYmBcWeS2He8L3spump" target="_blank" rel="noopener noreferrer" className="text-xl text-[#00FF00] break-words sm:text-left">
          https://pump.fun/coin/Fx3SkomgYuRkgCJJdhESp4FfcrYmBcWeS2He8L3spump
        </a>
      </div>

      <div className="flex justify-center items-center w-full mt-2 mb-8">
        <button onClick={toggleAudio} className="bg-[#00FF00] text-black px-6 py-2 rounded-full mb-4 text-xl sm:text-2xl">
          {isPlaying ? 'Stop $Katayki' : 'Listen $Katayki'}
        </button>
      </div>

      <div className="flex justify-center items-center w-full h-[70%] sm:h-[90%] mb-4">
        <img src={Img} alt="$Katayki" className="w-[70%] sm:w-[50%] lg:w-[30%] animate-scaleLoop" />
      </div>
    </div>
  )
}

export default App
