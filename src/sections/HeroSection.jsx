import { motion, useReducedMotion } from 'framer-motion';
import FloralAccent from '../components/FloralAccent';

/* ── Motion variants ────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const heroName = {
  hidden: { opacity: 0, y: 36, filter: 'blur(7px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
  },
};

/* ── Component ──────────────────────────────────────── */
export default function HeroSection({ visible }) {
  const shouldReduce = useReducedMotion();

  return (
    <section className="hero">
      {/* Background atmospheric blob */}
      <div className="hero__bg" aria-hidden="true" />

      {/* Floating rose petals */}
      <FloatingPetals visible={visible} />

      <motion.div
        className="hero__inner"
        variants={container}
        initial="hidden"
        animate={visible ? 'show' : 'hidden'}
      >
        {/* Mantra */}
        <motion.p variants={item} className="hero__mantra devanagari">
          श्री आदिनाथाय नमः ✦ श्री वासुपूज्य स्वामी नमः
        </motion.p>

        {/* Eyebrow + Name */}
        <motion.p variants={item} className="hero__eyebrow">
          the aathai parna of
        </motion.p>

        <motion.h1 variants={heroName} className="hero__name">
          Jiya
        </motion.h1>

        <motion.p variants={item} className="hero__surname">
          Mehul Kothari
        </motion.p>

        {/* ── PHOTO — centred hero moment ────────────── */}
        <motion.div variants={item} className="hero__photo-moment">
          {/* Floral corners */}
          <FloralAccent className="hero__floral hero__floral--tl" />
          <FloralAccent className="hero__floral hero__floral--tr" flip />

          {/* Arch-framed portrait */}
          <div className="hero__photo-wrap">
            <img
              src="/images/jiya.jpg"
              alt="Jiya Mehul Kothari"
              className="hero__photo"
            />
            {/* Curtain reveal — slides upward on gate-open */}
            <motion.div
              className="hero__curtain"
              initial={{ y: '0%' }}
              animate={visible && !shouldReduce ? { y: '-101%' } : (shouldReduce ? { y: '-101%' } : { y: '0%' })}
              transition={{ duration: 1.35, ease: [0.76, 0, 0.24, 1], delay: shouldReduce ? 0 : 0.92 }}
            />
          </div>
        </motion.div>

        {/* Invite text */}
        <motion.p variants={item} className="hero__invite">
          You are cordially invited
        </motion.p>

        <motion.p variants={item} className="hero__tapasya">
          Eight days of tapasya, now finding its gentle completion.
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ── Floating rose petals — pure CSS animation ────── */
function FloatingPetals({ visible }) {
  if (!visible) return null;
  return (
    <div className="petals-field" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <span key={i} className={`petal petal--${i + 1}`} />
      ))}
    </div>
  );
}
