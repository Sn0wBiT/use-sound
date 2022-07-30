# @sn0wbit/use-sound

> Simple useSound hook that allow you to play audio file by just 1 hook.
Using Howler

[![NPM](https://img.shields.io/npm/v/@sn0wbit/use-sound.svg)](https://www.npmjs.com/package/@sn0wbit/use-sound) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sn0wbit/use-sound
```

## Usage

```tsx
import React, { Component } from 'react'

import useSound from '@sn0wbit/use-sound'

class Example extends Component {
  const [playNavigate] = useSound({
    src: require('./assets/audio/FRONTEND_NAV_GEN_03.wav'),
    volume: 0.5
  })

  const [playNavigate2] = useSound({
    src: 'https://cdn.freesound.org/previews/178/178186_33044-lq.mp3',
    volume: 0.5
  })

  render() {
    return (
      <div>
        <button onClick={() => {
          playNavigate()
        }}>Play Navigate 1</button>
        <button onClick={() => {
          playNavigate2()
        }}>Play Navigate 2</button>
      </div>
    )
  }
}
```

## License

MIT © [Sn0wBiT](https://github.com/Sn0wBiT)
