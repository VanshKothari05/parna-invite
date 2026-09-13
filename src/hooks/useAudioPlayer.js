import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Manages the background music.
 * Playback is only ever started in direct response to a user gesture
 * (mobile browsers block autoplay). If playback fails for any reason,
 * the site continues to work — this never throws up to the UI.
 */
export function useAudioPlayer(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.55;
    audioRef.current = audio;
    const onCanPlay = () => setIsReady(true);
    audio.addEventListener('canplaythrough', onCanPlay);
    return () => {
      audio.pause();
      audio.removeEventListener('canplaythrough', onCanPlay);
      audioRef.current = null;
    };
  }, [src]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Autoplay/interaction restrictions — fail silently, site still works.
        setIsPlaying(false);
      });
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  return { play, toggle, isPlaying, isReady };
}
