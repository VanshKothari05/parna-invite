import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export default function PhotoChapter() {
  const frameRef    = useRef(null);
  const inView      = useInView(frameRef, { once: true, margin: '-12% 0px' });
  const shouldReduce = useReducedMotion();

  /* Shared animation helper */
  const anim = (delay = 0) => ({
    initial:    shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate:    inView ? { opacity: 1, y: 0 } : (shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }),
    transition: { duration: shouldReduce ? 0 : 0.85, delay: shouldReduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="ch ch-photo">

      {/* Photo frame */}
      <div className="ch-photo__frame-wrap">
        <div ref={frameRef} className="ch-photo__frame">

          {/* Image + curtain reveal */}
          <div className="ch-photo__image-wrap">
            <img
              src="/images/jiya.jpg"
              alt="Jiya Mehul Kothari"
              className="ch-photo__image"
            />
            {/* Curtain slides upward to reveal image bottom → top */}
            <motion.div
              className="ch-photo__curtain"
              initial={{ y: '0%' }}
              animate={inView ? { y: '-101%' } : (shouldReduce ? { y: '-101%' } : { y: '0%' })}
              transition={{ duration: shouldReduce ? 0 : 1.4, ease: [0.75, 0, 0.25, 1], delay: shouldReduce ? 0 : 0.3 }}
            />
          </div>

          {/* Animated SVG border — draws itself on entry */}
          <svg
            className="ch-photo__border-svg"
            viewBox="0 0 100 133"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M1.5,1.5 h97 v130 h-97 Z"
              stroke="var(--gold)"
              strokeWidth="0.8"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: shouldReduce ? 0 : 2, ease: 'easeInOut', delay: shouldReduce ? 0 : 0.2 }}
            />
            <motion.path
              d="M4,4 h92 v125 h-92 Z"
              stroke="var(--wine)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.2 } : {}}
              transition={{ duration: shouldReduce ? 0 : 2.5, ease: 'easeInOut', delay: shouldReduce ? 0 : 0.5 }}
            />
          </svg>

          {/* Corner filigree ornaments */}
          {[
            { cls: 'tl', style: undefined },
            { cls: 'tr', style: { transform: 'scaleX(-1)' } },
            { cls: 'bl', style: { transform: 'scaleY(-1)' } },
            { cls: 'br', style: { transform: 'scale(-1)'  } },
          ].map(({ cls, style }) => (
            <motion.div
              key={cls}
              className={`ch-photo__corner ch-photo__corner--${cls}`}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: shouldReduce ? 0 : 1, delay: shouldReduce ? 0 : 1 }}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={style}>
                <path d="M3,23 L3,8 Q3,3 8,3 L23,3" stroke="var(--gold)" strokeWidth="0.9" fill="none" opacity="0.55" />
                <circle cx="3" cy="3" r="2.2" fill="var(--gold)" opacity="0.45" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Name — appears after photo is revealed */}
      <motion.div className="ch-photo__name" {...anim(1.1)}>
        <span className="ch-photo__name-main">Jiya</span>
        <span className="ch-photo__name-sub">Mehul Kothari</span>
      </motion.div>

      {/* Invitation text */}
      <motion.p className="ch-photo__invite-text" {...anim(1.4)}>
        You are cordially invited to the Aathai Parna of{' '}
        <span className="ch-photo__invite-name">Jiya Mehul Kothari</span>
      </motion.p>
    </section>
  );
}
