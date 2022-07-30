import React from 'react'
import { useSound } from '@sn0wbit/use-sound'


const App = () => {
  const [playNavigate] = useSound({
    src: require('./assets/audio/FRONTEND_NAV_GEN_03.wav'),
    volume: 0.5
  })
  const [playNavigate2] = useSound({
    src: 'https://cdn.freesound.org/previews/178/178186_33044-lq.mp3',
    volume: 0.5
  })
  return (
    <div>
      <p>Example</p>
      <div>
        <button onClick={() => {
          playNavigate()
        }}>Play Navigate 1</button>
        <button onClick={() => {
          playNavigate2()
        }}>Play Navigate 2</button>
      </div>
    </div>
  )
}

export default App
