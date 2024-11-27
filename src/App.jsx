import { useEffect } from 'react'
import soundFile from './assets/thank-you-katayki.mp3'
import Img from './assets/katayki.jpg'

import './App.css'

function App() {
  useEffect(() => {
    const audio = new Audio(soundFile)
    audio.loop = true
    audio.play().catch((error) => {
      console.error('Autoplay failed:', error)
    })

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  return (
    <>
      <div className="flex justify-center gap-4 w-full pt-4">
        <p className="text-xl text-white">Buy here:</p>{' '}
        <a href="https://pump.fun/coin/Fx3SkomgYuRkgCJJdhESp4FfcrYmBcWeS2He8L3spump" target="_blank" className="text-xl text-[#00FF00]">
          https://pump.fun/coin/Fx3SkomgYuRkgCJJdhESp4FfcrYmBcWeS2He8L3spump
        </a>
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <img src={Img} alt="$Katayki" className="w-[50%] lg:w-[30%] animate-scaleLoop" />
      </div>
    </>
  )
}

export default App
