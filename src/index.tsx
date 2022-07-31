import { useCallback, useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Howl } from 'howler'

export type PlayFunction = () => void

export type ReturnValue = [PlayFunction]

interface TuseSoundProps {
  src: string | string[]
  volume?: number
}

export const useSound = (props: TuseSoundProps) => {
  const { src, volume = 1 } = props
  const [howler, setHowler] = useState<Howl | null>(null)

  const initHowler = async () => {
    const mod = await import('howler')
    const howler = new mod.Howl({
      src: Array.isArray(src) ? src : [src],
      volume: volume
    })
    setHowler(howler)
  }

  const play: PlayFunction = useCallback(
    (options?: any) => {
      if (typeof options === 'undefined') {
        options = {}
      }

      if (!howler) {
        return
      }

      howler.play()
    },
    [howler]
  )

  useEffect(() => {
    initHowler()
  }, [])

  useEffect(() => {
    initHowler()
  }, [src, volume])

  useEffect(() => {
    if (howler === null) {
      return
    }
    howler.volume(volume)
  }, [volume])

  const returnValue: ReturnValue = [play]
  return returnValue
}

export default useSound
