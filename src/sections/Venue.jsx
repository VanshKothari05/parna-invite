import RevealOnScroll from '../components/RevealOnScroll';
import { IconPin, IconArrowRight } from '../components/Icons';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Flags Banquet Hall, Liberty Garden, Malad West, Mumbai');

export default function Venue() {
  return (
    <section className="section venue">
      <RevealOnScroll className="venue__label" as="p">
        Venue
      </RevealOnScroll>

      <RevealOnScroll delay={80} as="div">
        <p className="venue__name">Flags Banquet Hall</p>
        <p className="venue__address">
          Liberty Garden, Malad West
          <br />
          Mumbai
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={160} as="div">
        <a
          className="venue__map-btn"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconPin />
          <span>View Location</span>
          <IconArrowRight className="venue__map-btn-arrow" />
        </a>
      </RevealOnScroll>
    </section>
  );
}
