import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import Mandala from './Mandala';

export default function TempleGate({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const [hidden,  setHidden]  = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const handleTap = () => {
    if (opening) return;
    setOpening(true);
    onOpen();
  };

  useEffect(() => {
    if (!opening) return;
    /* Overlay fade = 0.85s, hide DOM after it's invisible at 1100ms */
    const t = setTimeout(() => setHidden(true), reducedMotion ? 150 : 1100);
    return () => clearTimeout(t);
  }, [opening, reducedMotion]);

  if (hidden) return null;

  return (
    <div
      className={`gate ${opening ? 'gate--opening' : ''}`}
      role="button"
      tabIndex={0}
      aria-label="Tap to open the invitation"
      onClick={handleTap}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleTap()}
    >
      {/* Warm diya-like radial glow */}
      <div className="gate__glow" aria-hidden="true" />

      {/* Very faint rotating mandala behind everything */}
      <div className="gate__mandala-wrap" aria-hidden="true">
        <Mandala size={340} />
      </div>

      {/* Floating motes */}
      <div className="gate__field" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className={`mote mote--${i + 1}`} />
        ))}
      </div>

      {/* ═══════════════════════════════════════
          TEMPLE GATE STRUCTURE
      ═══════════════════════════════════════ */}

      {/* TORANA + SHIKHAR — top architectural element */}
      <div className="gate__torana" aria-hidden="true">
        <ToranaShikhar />
      </div>

      {/* LEFT DOOR LEAF */}
      <div className="gate__door gate__door--left" aria-hidden="true">
        <DoorPanel />
      </div>

      {/* RIGHT DOOR LEAF */}
      <div className="gate__door gate__door--right" aria-hidden="true">
        <DoorPanel flip />
      </div>

      {/* Center seam — crack of warm light between the closed doors */}
      <div className="gate__seam" aria-hidden="true" />

      {/* Temple bells hanging from torana */}
      <TempleBell side="left" />
      <TempleBell side="right" />

      {/* ═══════════════════════════════════════
          CENTRE CONTENT (above the doors)
      ═══════════════════════════════════════ */}
      <div className="gate__content">
        <div className="gate__mantras">
          <p className="gate__mantra devanagari">श्री आदिनाथाय नमः</p>
          <p className="gate__mantra gate__mantra--2 devanagari">श्री वासुपूज्य स्वामी नमः</p>
        </div>

        <div className="gate__lotus" aria-hidden="true">
          <LotusOrnament />
        </div>

        <div className="gate__diya" aria-hidden="true">
          <DiyaFlame />
        </div>

        <p className="gate__cue" aria-label="Touch to reveal the invitation">
          <span className="gate__cue-mark" aria-hidden="true">✦</span>
          <span className="gate__cue-text devanagari">स्पर्श करें</span>
          <span className="gate__cue-mark" aria-hidden="true">✦</span>
        </p>
      </div>

      {/* Golden sweep on open */}
      {opening && <div className="gate__sweep" aria-hidden="true" />}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   TORANA + SHIKHAR — combined top element
   A full-width ornamental beam with a temple spire
   (kalash+shikhar) rising above the center.
───────────────────────────────────────────────────── */
function ToranaShikhar() {
  return (
    <svg
      viewBox="0 0 360 120"
      preserveAspectRatio="xMidYMin meet"
      fill="none"
      className="gate__torana-svg"
    >
      {/* ── SHIKHAR (spire) — above beam, centered ── */}
      {/* Base plinth of spire */}
      <rect x="148" y="4" width="64" height="12" fill="#2A0A1E" stroke="rgba(160,120,56,0.6)" strokeWidth="0.9" />
      {/* Lower shikhar tier */}
      <path d="M148,16 L180,14 L212,16 L206,28 L180,26 L154,28 Z"
        fill="#2A0A1E" stroke="rgba(160,120,56,0.55)" strokeWidth="0.9" />
      {/* Middle shikhar tier */}
      <path d="M158,28 L180,26 L202,28 L197,40 L180,38 L163,40 Z"
        fill="#2A0A1E" stroke="rgba(160,120,56,0.48)" strokeWidth="0.8" />
      {/* Upper spire body */}
      <path d="M164,40 L180,38 L196,40 L192,52 L180,50 L168,52 Z"
        fill="#2A0A1E" stroke="rgba(160,120,56,0.44)" strokeWidth="0.7" />
      {/* Neck */}
      <rect x="174" y="52" width="12" height="8" fill="#2A0A1E" stroke="rgba(160,120,56,0.55)" strokeWidth="0.8" />
      {/* Kalash (pot) */}
      <ellipse cx="180" cy="66" rx="10" ry="14" fill="#2A0A1E" stroke="rgba(160,120,56,0.75)" strokeWidth="1.1" />
      <ellipse cx="180" cy="56" rx="5"  ry="3"  fill="rgba(160,120,56,0.55)" />
      {/* Finial / tip */}
      <line x1="180" y1="52" x2="180" y2="48" stroke="rgba(160,120,56,0.7)" strokeWidth="1.2" />
      <circle cx="180" cy="47" r="3" fill="rgba(160,120,56,0.65)" />
      {/* Small flag */}
      <path d="M180,44 L188,40 L180,48 Z" fill="rgba(160,120,56,0.5)" />

      {/* ── TORANA BEAM ── */}
      {/* Main beam body */}
      <rect x="0" y="72" width="360" height="48" fill="#2A0A1E" />
      {/* Top gold border */}
      <line x1="0" y1="72"  x2="360" y2="72"  stroke="rgba(160,120,56,0.72)" strokeWidth="1.6" />
      {/* Second top line */}
      <line x1="0" y1="79"  x2="360" y2="79"  stroke="rgba(160,120,56,0.28)" strokeWidth="0.6" />
      {/* Bottom gold border */}
      <line x1="0" y1="118" x2="360" y2="118" stroke="rgba(160,120,56,0.55)" strokeWidth="1.2" />
      {/* Second bottom line */}
      <line x1="0" y1="112" x2="360" y2="112" stroke="rgba(160,120,56,0.25)" strokeWidth="0.5" />

      {/* Diamond ornaments along beam */}
      {[28, 68, 108, 180, 252, 292, 332].map((x) => (
        <path key={x} d={`M${x},84 L${x + 8},97 L${x},110 L${x - 8},97 Z`}
          stroke="rgba(160,120,56,0.42)" strokeWidth="0.8" fill="none" />
      ))}

      {/* Garland scallops hanging at bottom of beam */}
      {Array.from({ length: 12 }, (_, i) => (
        <path key={i}
          d={`M${i * 32},118 Q${i * 32 + 16},108 ${i * 32 + 32},118`}
          stroke="rgba(160,120,56,0.32)" strokeWidth="0.8" fill="none"
        />
      ))}
      {/* Pendant drops at scallop low-points */}
      {Array.from({ length: 12 }, (_, i) => (
        <circle key={i} cx={i * 32 + 16} cy={110} r="2" fill="rgba(160,120,56,0.38)" />
      ))}

      {/* Kalash shelf connects shikhar to beam */}
      <rect x="152" y="68" width="56" height="6" fill="#2A0A1E" stroke="rgba(160,120,56,0.45)" strokeWidth="0.7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   DOOR PANEL — one leaf of the temple gate
   Nested rectangular molding + ornamental insets,
   rivets along inner edge. Flip for the right leaf.
───────────────────────────────────────────────────── */
function DoorPanel({ flip = false }) {
  return (
    <svg
      viewBox="0 0 190 900"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      fill="none"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      {/* Background tint — slightly lighter than gate bg for panel depth */}
      <rect x="0" y="0" width="190" height="900" fill="rgba(34,8,24,0.45)" />

      {/* ── FRAME MOLDING ── */}
      {/* Outermost gold border */}
      <rect x="4"  y="4"  width="182" height="892" stroke="rgba(160,120,56,0.62)" strokeWidth="1.5" />
      {/* Middle frame */}
      <rect x="12" y="12" width="166" height="876" stroke="rgba(160,120,56,0.32)" strokeWidth="0.9" />
      {/* Inner frame */}
      <rect x="20" y="20" width="150" height="860" stroke="rgba(160,120,56,0.18)" strokeWidth="0.6" />

      {/* ── TOP PANEL INSET ── */}
      <rect x="28" y="28" width="134" height="220"
        fill="rgba(28,6,20,0.38)" stroke="rgba(160,120,56,0.35)" strokeWidth="0.8" />
      {/* Top panel ornament — concentric diamond */}
      <path d="M95,78 L120,138 L95,198 L70,138 Z"
        stroke="rgba(160,120,56,0.28)" strokeWidth="0.8" fill="none" />
      <circle cx="95" cy="138" r="18" stroke="rgba(160,120,56,0.2)" strokeWidth="0.6" fill="none" />
      <circle cx="95" cy="138" r="6"  stroke="rgba(160,120,56,0.25)" strokeWidth="0.6" fill="none" />
      {/* 8 axis lines in top panel */}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * 45 - 90) * Math.PI / 180;
        return (
          <line key={i}
            x1={95} y1={138}
            x2={95 + 22 * Math.cos(a)} y2={138 + 22 * Math.sin(a)}
            stroke="rgba(160,120,56,0.12)" strokeWidth="0.5"
          />
        );
      })}

      {/* ── RAIL DIVIDERS ── */}
      <line x1="4" y1="260" x2="186" y2="260" stroke="rgba(160,120,56,0.3)" strokeWidth="0.9" />
      <line x1="4" y1="644" x2="186" y2="644" stroke="rgba(160,120,56,0.3)" strokeWidth="0.9" />

      {/* ── MIDDLE PANEL INSET ── */}
      <rect x="28" y="268" width="134" height="368"
        fill="rgba(28,6,20,0.28)" stroke="rgba(160,120,56,0.28)" strokeWidth="0.7" />
      {/* Diamond series down middle panel */}
      {[350, 422, 494].map((y) => (
        <path key={y} d={`M95,${y - 16} L111,${y} L95,${y + 16} L79,${y} Z`}
          stroke="rgba(160,120,56,0.2)" strokeWidth="0.7" fill="none" />
      ))}
      {/* Subtle vertical dash-center */}
      <line x1="95" y1="280" x2="95" y2="624"
        stroke="rgba(160,120,56,0.08)" strokeWidth="0.5" strokeDasharray="4 10" />

      {/* ── BOTTOM PANEL INSET ── */}
      <rect x="28" y="652" width="134" height="220"
        fill="rgba(28,6,20,0.38)" stroke="rgba(160,120,56,0.35)" strokeWidth="0.8" />
      {/* Bottom panel ornament — mirrors top */}
      <path d="M95,702 L120,762 L95,822 L70,762 Z"
        stroke="rgba(160,120,56,0.28)" strokeWidth="0.8" fill="none" />
      <circle cx="95" cy="762" r="18" stroke="rgba(160,120,56,0.2)" strokeWidth="0.6" fill="none" />
      <circle cx="95" cy="762" r="6"  stroke="rgba(160,120,56,0.25)" strokeWidth="0.6" fill="none" />

      {/* ── INNER-EDGE RIVETS / BOLTS ── */}
      {[80, 240, 420, 600, 760, 860].map((y) => (
        <g key={y}>
          <circle cx="180" cy={y} r="6"   fill="none"  stroke="rgba(160,120,56,0.5)" strokeWidth="1.1" />
          <circle cx="180" cy={y} r="3"   fill="rgba(140,100,46,0.38)" />
          <circle cx="180" cy={y} r="1.2" fill="rgba(160,120,56,0.5)" />
        </g>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   LOTUS ORNAMENT — centre content area
───────────────────────────────────────────────────── */
function LotusOrnament() {
  const cx = 36, cy = 36;
  const petals = Array.from({ length: 8 }, (_, i) => {
    const a  = (i * 45 - 90) * (Math.PI / 180);
    const a1 = a - 0.3, a2 = a + 0.3;
    const r = 29, rm = 20;
    return `M${cx},${cy} Q${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} ${cx + rm * Math.cos(a)},${cy + rm * Math.sin(a)} Q${cx + r * Math.cos(a2)},${cy + r * Math.sin(a2)} ${cx},${cy}`;
  });
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx={cx} cy={cy} r="33" stroke="var(--gold)" strokeWidth="0.7" opacity="0.6" />
      <circle cx={cx} cy={cy} r="23" stroke="var(--gold-soft)" strokeWidth="0.5" opacity="0.35" />
      {petals.map((d, i) => (
        <path key={i} d={d} stroke="var(--gold)" strokeWidth="0.8" fill="none" opacity="0.62" />
      ))}
      <circle cx={cx} cy={cy} r="5"   stroke="var(--gold)" strokeWidth="0.6" opacity="0.55" />
      <circle cx={cx} cy={cy} r="1.5" fill="var(--gold)"   opacity="0.7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   DIYA FLAME — flickering lamp in centre content
───────────────────────────────────────────────────── */
function DiyaFlame() {
  return (
    <svg width="34" height="52" viewBox="0 0 34 52" fill="none">
      <ellipse cx="17" cy="22" rx="11" ry="14" fill="rgba(240,180,80,0.2)" className="gate__diya-glow" />
      <path
        className="gate__diya-flame"
        d="M17 4 C 25 14, 27 24, 21 32 C 23 25, 18 21, 17 26 C 16 21, 11 25, 13 32 C 7 24, 9 14, 17 4 Z"
        fill="var(--gold-warm)" opacity="0.95"
      />
      <path
        d="M17 12 C 21 20, 21 26, 18 30 C 19 25, 16 23, 17 27 C 16 23, 13 25, 14 30 C 11 26, 13 20, 17 12 Z"
        fill="var(--gold-pale)" opacity="0.78"
      />
      <ellipse cx="17" cy="43" rx="10" ry="5" stroke="rgba(160,120,56,0.65)" strokeWidth="1.2" fill="none" />
      <line x1="17" y1="32" x2="17" y2="38" stroke="rgba(160,120,56,0.5)" strokeWidth="1" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   TEMPLE BELL (GHANTA)
   Hangs from torana; sways gently, rings fast on tap.
───────────────────────────────────────────────────── */
function TempleBell({ side }) {
  return (
    <div className={`gate__bell gate__bell--${side}`} aria-hidden="true">
      <svg width="34" height="54" viewBox="0 0 34 54" fill="none">
        <line x1="17" y1="0" x2="17" y2="8" stroke="var(--gold)" strokeWidth="1.3" opacity="0.55" strokeDasharray="2 2" />
        <ellipse cx="17" cy="11" rx="4" ry="3" stroke="var(--gold)" strokeWidth="1.2" fill="none" opacity="0.8" />
        <path
          d="M17,14 C10,14 4,19 4,27 L4,36 Q4,40 8,40 L26,40 Q30,40 30,36 L30,27 C30,19 24,14 17,14 Z"
          stroke="var(--gold)" strokeWidth="1.3" fill="rgba(160,120,56,0.1)" opacity="0.9"
        />
        <path d="M6,25 Q17,23 28,25" stroke="var(--gold)" strokeWidth="0.65" fill="none" opacity="0.45" />
        <path d="M5,32 Q17,30 29,32" stroke="var(--gold)" strokeWidth="0.65" fill="none" opacity="0.45" />
        <path d="M4,37 Q17,43 30,37" stroke="var(--gold)" strokeWidth="1.2" fill="none" opacity="0.75" />
        <line x1="17" y1="40" x2="17" y2="46" stroke="var(--gold)" strokeWidth="1.1" opacity="0.58" />
        <circle cx="17" cy="49" r="3.2" fill="var(--gold)" opacity="0.54" />
      </svg>
    </div>
  );
}
