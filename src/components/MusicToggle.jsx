export default function MusicToggle({ isPlaying, onToggle }) {
  return (
    <button
      type="button"
      className={`music-toggle ${isPlaying ? 'music-toggle--playing' : ''}`}
      onClick={onToggle}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
    >
      <span className="music-toggle__bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
    </button>
  );
}
