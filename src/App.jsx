import { useState } from "react";
import "./App.css";
import TempleGate from "./components/TempleGate";
import MusicToggle from "./components/MusicToggle";
import HeroSection from "./sections/HeroSection";
import DetailsSection from "./sections/DetailsSection";
import { useAudioPlayer } from "./hooks/useAudioPlayer";

export default function App() {
  const [opened, setOpened] = useState(false);
  const { play, toggle, pauseForNavigation, isPlaying } = useAudioPlayer(
    "/music/jai-ho-jai-ho-tapasvi.mp3",
  );

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

      {opened && <MusicToggle isPlaying={isPlaying} onToggle={toggle} />}
    </>
  );
}
