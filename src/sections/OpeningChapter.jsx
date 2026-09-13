import { motion } from 'framer-motion';
import Mandala from '../components/Mandala';

/* ── Framer Motion variants ───────────────────────────── */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.17, delayChildren: 0.55 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

const heroName = {
  hidden: { opacity: 0, y: 38, filter: 'blur(8px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Component ────────────────────────────────────────── */
export default function OpeningChapter({ visible }) {
  return (
    <section className="ch ch-opening">

      {/* Slowly rotating mandala — atmospheric */}
      <div className="ch-opening__mandala-wrap" aria-hidden="true">
        <Mandala size={400} className="ch-opening__mandala" />
      </div>

      {/* Corner filigree ornaments */}
      {['tl', 'tr', 'bl', 'br'].map((pos) => (
        <CornerOrnament key={pos} pos={pos} visible={visible} />
      ))}

      {/* Staggered text reveal */}
      <motion.div
        className="ch-opening__content"
        variants={container}
        initial="hidden"
        animate={visible ? 'show' : 'hidden'}
      >
        {/* Top rule / ornament */}
        <motion.div variants={item} className="ch-opening__top-rule" aria-hidden="true">
          <TopRule />
        </motion.div>

        <motion.p variants={item} className="ch-opening__eyebrow">
          the aathai parna of
        </motion.p>

        <motion.h1 variants={heroName} className="ch-opening__name-first">
          Jiya
        </motion.h1>

        <motion.p variants={item} className="ch-opening__name-second">
          Mehul Kothari
        </motion.p>

        <motion.div variants={item} className="ch-opening__rule-wrap" aria-hidden="true">
          <DiamondRule />
        </motion.div>

        <motion.p variants={item} className="ch-opening__invite-line">
          You are cordially invited
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ── Corner ornament ──────────────────────────────────── */
function CornerOrnament({ pos, visible }) {
  const transforms = {
    tl: undefined,
    tr: 'scaleX(-1)',
    bl: 'scaleY(-1)',
    br: 'scale(-1)',
  };
  return (
    <motion.div
      className={`ch-opening__corner ch-opening__corner--${pos}`}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.4, delay: 0.9, ease: 'easeOut' }}
    >
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={transforms[pos] ? { transform: transforms[pos] } : undefined}>
        <path d="M4,52 L4,14 Q4,4 14,4 L52,4" stroke="var(--gold)" strokeWidth="1" fill="none" opacity="0.48" />
        <path d="M4,38 L4,20 Q4,12 20,12 L38,12" stroke="var(--wine)" strokeWidth="0.6" fill="none" opacity="0.28" />
        <circle cx="4"  cy="4"  r="3"   fill="var(--gold)" opacity="0.5"  />
        <circle cx="14" cy="4"  r="1.8" fill="var(--gold)" opacity="0.28" />
        <circle cx="4"  cy="14" r="1.8" fill="var(--gold)" opacity="0.28" />
      </svg>
    </motion.div>
  );
}

/* ── Decorative SVG rules ─────────────────────────────── */
function TopRule() {
  return (
    <svg width="110" height="22" viewBox="0 0 110 22" fill="none">
      <line x1="0"  y1="11" x2="40"  y2="11" stroke="var(--gold)" strokeWidth="0.7" opacity="0.45" />
      <path d="M44 11 L55 3 L66 11 L55 19 Z" stroke="var(--gold)" strokeWidth="0.8" fill="none" opacity="0.55" />
      <line x1="70" y1="11" x2="110" y2="11" stroke="var(--gold)" strokeWidth="0.7" opacity="0.45" />
      <circle cx="40"  cy="11" r="2" fill="var(--gold)" opacity="0.38" />
      <circle cx="70"  cy="11" r="2" fill="var(--gold)" opacity="0.38" />
    </svg>
  );
}

function DiamondRule() {
  return (
    <svg width="220" height="20" viewBox="0 0 220 20" fill="none">
      <line x1="0"   y1="10" x2="90"  y2="10" stroke="var(--gold)" strokeWidth="0.6" opacity="0.38" />
      <path d="M94 10 L102 4 L110 10 L102 16 Z" stroke="var(--gold)" strokeWidth="0.7" fill="none" opacity="0.55" />
      <line x1="126" y1="10" x2="220" y2="10" stroke="var(--gold)" strokeWidth="0.6" opacity="0.38" />
      <circle cx="90"  cy="10" r="2" fill="var(--gold)" opacity="0.35" />
      <circle cx="126" cy="10" r="2" fill="var(--gold)" opacity="0.35" />
    </svg>
  );
}
