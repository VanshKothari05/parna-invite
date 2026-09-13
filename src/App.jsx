import { useEffect, useState } from "react";
import "./App.css";
import TempleGate from "./components/TempleGate";
import MusicToggle from "./components/MusicToggle";
import HeroSection from "./sections/HeroSection";
import DetailsSection from "./sections/DetailsSection";
import { useAudioPlayer } from "./hooks/useAudioPlayer";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const { play, toggle, pauseForNavigation, isPlaying } = useAudioPlayer(
    "/music/jai-ho-jai-ho-tapasvi.mp3",
  );

  useEffect(() => {
    if (!opened) return undefined;

    const handleScroll = () => {
      setShowScrollHint(window.scrollY <= 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [opened]);

  const handleGateOpen = () => {
    setOpened(true);
    play();
  };

  return (
    <>
      <TempleGate onOpen={handleGateOpen} />

      <main className={`invitation ${opened ? "invitation--visible" : ""}`}>
        <HeroSection visible={opened} />
        <DetailsSection onLocationClick={pauseForNavigation} />
      </main>

      {opened && showScrollHint && (
        <button
          type="button"
          className="scroll-hint"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          aria-label="Scroll down to see more of the invitation"
        >
          <span>Scroll down</span>
          <span className="scroll-hint__arrow" aria-hidden="true">
            ↓
          </span>
        </button>
      )}

      {opened && <MusicToggle isPlaying={isPlaying} onToggle={toggle} />}
    </>
  );
}
