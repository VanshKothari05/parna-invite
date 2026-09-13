import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import ChapterReveal from '../components/ChapterReveal';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Flags Banquet Hall, Liberty Garden, Malad West, Mumbai');

export default function VenueChapter() {
  const frameRef    = useRef(null);
  const inView      = useInView(frameRef, { once: true, margin: '-12% 0px' });
  const shouldReduce = useReducedMotion();

  return (
    <section className="ch ch-venue">

      <ChapterReveal>
        <p className="ch-venue__label">Venue</p>
      </ChapterReveal>

      {/* Floating pin */}
      <ChapterReveal delay={0.12}>
        <div className="ch-venue__pin" aria-hidden="true">
          <LocationPin />
        </div>
      </ChapterReveal>

      {/* Animated-border frame around venue name */}
      <ChapterReveal delay={0.24} className="ch-venue__frame-wrap">
        <div ref={frameRef} className="ch-venue__frame">
          <svg className="ch-venue__frame-svg" viewBox="0 0 300 160" fill="none">
            <motion.path
              d="M2,2 h296 v156 h-296 Z"
              stroke="var(--gold)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.45 } : {}}
              transition={{ duration: shouldReduce ? 0 : 2, ease: 'easeInOut' }}
            />
            <motion.path
              d="M8,8 h284 v144 h-284 Z"
              stroke="var(--wine)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.18 } : {}}
              transition={{ duration: shouldReduce ? 0 : 2.5, ease: 'easeInOut', delay: shouldReduce ? 0 : 0.3 }}
            />
          </svg>
          <p className="ch-venue__name">Flags Banquet Hall</p>
          <p className="ch-venue__address">
            Liberty Garden, Malad West
            <br />
            Mumbai
          </p>
        </div>
      </ChapterReveal>

      {/* Map link */}
      <ChapterReveal delay={0.42}>
        <a
          className="ch-venue__map-link"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Flags Banquet Hall on Google Maps"
        >
          View Location
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M5 12h13.5M13 6.5 18.5 12 13 17.5" />
          </svg>
        </a>
      </ChapterReveal>

      {/* Parking — integrated, not a pill badge */}
      <ChapterReveal delay={0.56}>
        <p className="ch-venue__parking">
          <span className="ch-venue__parking-dot" aria-hidden="true" />
          Valet Parking Available
        </p>
      </ChapterReveal>
    </section>
  );
}

function LocationPin() {
  return (
    <svg width="26" height="34" viewBox="0 0 26 34" fill="none">
      <path
        d="M13 2C6.92 2 2 6.92 2 13c0 8.7 11 21 11 21S24 21.7 24 13C24 6.92 19.08 2 13 2z"
        stroke="var(--wine)"
        strokeWidth="1.3"
        fill="none"
      />
      <circle cx="13" cy="13" r="4" stroke="var(--wine)" strokeWidth="1.1" fill="none" />
    </svg>
  );
}
