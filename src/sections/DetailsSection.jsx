import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FloralSeparator } from "../components/FloralAccent";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Flags Banquet Hall, Liberty Garden, Malad West, Mumbai");

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DetailsSection({ onLocationClick }) {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-3% 0px" });

  return (
    <section className="details" ref={ref}>
      <motion.div
        className="details__inner"
        variants={container}
        initial={shouldReduce ? false : "hidden"}
        animate={inView || shouldReduce ? "show" : "hidden"}
      >
        {/* Floral separator */}
        <motion.div variants={item} className="details__top-floral">
          <FloralSeparator />
        </motion.div>

        {/* Date / Time */}
        <motion.div variants={item} className="details__event">
          <div className="details__date-row">
            <span className="details__day-num">18</span>
            <div className="details__date-text">
              <span className="details__month">September 2026</span>
              <span className="details__day-name">Friday</span>
            </div>
          </div>
          <p className="details__time">10:30 AM – 1:00 PM</p>
        </motion.div>

        {/* Rule */}
        <motion.div
          variants={item}
          className="details__rule"
          aria-hidden="true"
        />

        {/* Venue */}
        <motion.div variants={item} className="details__venue">
          <p className="details__venue-name">Flags Banquet Hall</p>
          <p className="details__venue-addr">
            Liberty Garden, Malad West · Mumbai
          </p>
          <a
            className="details__map-btn"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLocationClick}
            aria-label="Open Flags Banquet Hall on Google Maps"
          >
            <LocationPin />
            View Location
          </a>
          <p className="details__parking">
            <span className="details__parking-dot" aria-hidden="true" />
            Valet Parking Available
          </p>
        </motion.div>

        {/* Rule */}
        <motion.div
          variants={item}
          className="details__rule"
          aria-hidden="true"
        />

        {/* RSVP */}
        <motion.div variants={item} className="details__rsvp">
          <p className="details__rsvp-label">RSVP</p>
          <p className="details__family">Kothari Family</p>
          <p className="details__blessings">Blessings Only</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function LocationPin() {
  return (
    <svg
      width="13"
      height="17"
      viewBox="0 0 13 17"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 1C3.74 1 1.5 3.24 1.5 6c0 4.2 5 10 5 10s5-5.8 5-10c0-2.76-2.24-5-5-5z"
        stroke="currentColor"
        strokeWidth="1.15"
        fill="none"
      />
      <circle
        cx="6.5"
        cy="6"
        r="1.8"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
