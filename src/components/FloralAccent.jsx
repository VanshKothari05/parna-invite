/**
 * FloralAccent — delicate SVG floral sprig for photo corners.
 * flip=true mirrors horizontally for right-side corners.
 * Small variants for dividers live at the bottom of this file.
 */
export default function FloralAccent({ className = '', flip = false, small = false }) {
  const scale = small ? 0.7 : 1;
  const w = Math.round(55 * scale);
  const h = Math.round(50 * scale);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 55 50"
      fill="none"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      {/* Main curved branch — from bottom-right toward top-left */}
      <path
        d="M52,48 Q36,32 22,18 Q12,9 5,5"
        stroke="var(--rose-soft)"
        strokeWidth="0.9"
        fill="none"
        opacity="0.55"
      />

      {/* Primary flower — top of branch */}
      {[0, 1, 2, 3, 4].map((i) => {
        const a  = (i * 72 - 90) * (Math.PI / 180);
        const cx = 5 + 6.5 * Math.cos(a);
        const cy = 5 + 6.5 * Math.sin(a);
        return (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="3.5" ry="1.7"
            fill="var(--rose-soft)"
            opacity="0.55"
            transform={`rotate(${i * 72 - 90},${cx},${cy})`}
          />
        );
      })}
      <circle cx="5" cy="5" r="2.2" fill="var(--gold-soft)" opacity="0.75" />

      {/* Mid flower — along branch */}
      {[0, 1, 2, 3, 4].map((i) => {
        const a  = (i * 72 - 90) * (Math.PI / 180);
        const cx = 22 + 5.5 * Math.cos(a);
        const cy = 18 + 5.5 * Math.sin(a);
        return (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="3" ry="1.4"
            fill="var(--blush-mid)"
            opacity="0.48"
            transform={`rotate(${i * 72 - 90},${cx},${cy})`}
          />
        );
      })}
      <circle cx="22" cy="18" r="1.8" fill="var(--gold-soft)" opacity="0.65" />

      {/* Small bud near bottom */}
      <circle cx="40" cy="34" r="2.5" fill="var(--blush-mid)" opacity="0.32" />
      {[0, 1, 2, 3, 4].map((i) => {
        const a  = (i * 72 - 90) * (Math.PI / 180);
        const cx = 40 + 4 * Math.cos(a);
        const cy = 34 + 4 * Math.sin(a);
        return (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="2.2" ry="1.1"
            fill="var(--rose-soft)"
            opacity="0.35"
            transform={`rotate(${i * 72 - 90},${cx},${cy})`}
          />
        );
      })}

      {/* Leaves */}
      <ellipse cx="34" cy="14" rx="5" ry="2" fill="var(--rose-soft)" opacity="0.22" transform="rotate(-25,34,14)" />
      <ellipse cx="15" cy="28" rx="5" ry="2" fill="var(--rose-soft)" opacity="0.2"  transform="rotate(-55,15,28)" />
    </svg>
  );
}

/* ── Petal separator — used between sections ─────────── */
export function FloralSeparator() {
  return (
    <svg width="220" height="30" viewBox="0 0 220 30" fill="none" aria-hidden="true">
      <line x1="0"   y1="15" x2="72"  y2="15" stroke="var(--rose-soft)" strokeWidth="0.7" opacity="0.5" />
      <line x1="148" y1="15" x2="220" y2="15" stroke="var(--rose-soft)" strokeWidth="0.7" opacity="0.5" />
      {/* Center lotus / 6-petal */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a  = (i * 60 - 90) * (Math.PI / 180);
        const cx = 110 + 8.5 * Math.cos(a);
        const cy = 15  + 8.5 * Math.sin(a);
        return (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="4.5" ry="2"
            fill="var(--rose-soft)"
            opacity="0.42"
            transform={`rotate(${i * 60 - 90},${cx},${cy})`}
          />
        );
      })}
      <circle cx="110" cy="15" r="2.8" fill="var(--gold-soft)" opacity="0.62" />
      <circle cx="72"  cy="15" r="2"   fill="var(--rose-soft)" opacity="0.4"  />
      <circle cx="148" cy="15" r="2"   fill="var(--rose-soft)" opacity="0.4"  />
    </svg>
  );
}
