import { useState, useCallback, useEffect } from 'react';

const useSound = props => {
  const {
    src,
    volume = 1
  } = props;
  const [howler, setHowler] = useState(null);
  const play = useCallback(options => {

    if (!howler) {
      return;
    }

    howler.play();
  }, [howler]);
  useEffect(() => {
    const initHowler = async () => {
      const mod = await import('howler');
      const howler = new mod.Howl({
        src: [src],
        volume: volume
      });
      setHowler(howler);
    };

    initHowler();
  }, []);
  useEffect(() => {
    if (howler === null) {
      return;
    }

    howler.volume(volume);
  }, [volume]);
  const returnValue = [play];
  return returnValue;
};

export default useSound;
export { useSound };
//# sourceMappingURL=index.modern.js.map
