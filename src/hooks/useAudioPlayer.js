import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Manages the background music.
 * Playback is only ever started in direct response to a user gesture
 * (mobile browsers block autoplay). If playback fails for any reason,
 * the site continues to work — this never throws up to the UI.
 */
export function useAudioPlayer(src) {
  const audioRef = useRef(null);
  const resumeOnReturnRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.55;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    resumeOnReturnRef.current = false;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  }, []);

  const pauseForNavigation = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;
    resumeOnReturnRef.current = true;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    resumeOnReturnRef.current = false;
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
      resumeOnReturnRef.current = false;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      resumeOnReturnRef.current = false;
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const resumeOnReturn = () => {
      if (document.visibilityState !== "visible" || !resumeOnReturnRef.current)
        return;
      resumeOnReturnRef.current = false;
      play();
    };
    const pauseWhenHidden = () => {
      if (document.visibilityState === "hidden") pauseForNavigation();
    };

    window.addEventListener("pagehide", stop);
    window.addEventListener("focus", resumeOnReturn);
    window.addEventListener("pageshow", resumeOnReturn);
    document.addEventListener("visibilitychange", pauseWhenHidden);
    document.addEventListener("visibilitychange", resumeOnReturn);
    return () => {
      window.removeEventListener("pagehide", stop);
      window.removeEventListener("focus", resumeOnReturn);
      window.removeEventListener("pageshow", resumeOnReturn);
      document.removeEventListener("visibilitychange", pauseWhenHidden);
      document.removeEventListener("visibilitychange", resumeOnReturn);
    };
  }, [pauseForNavigation, play, stop]);

  return { play, toggle, stop, pauseForNavigation, isPlaying };
}
