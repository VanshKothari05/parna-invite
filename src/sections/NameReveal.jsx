import RevealOnScroll from '../components/RevealOnScroll';
import OrnamentDivider from '../components/OrnamentDivider';

export default function NameReveal() {
  return (
    <section className="section name-reveal">
      <RevealOnScroll className="name-reveal__mark" as="div">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
          <path
            d="M23 4 C 14 15, 14 24, 23 34 C 32 24, 32 15, 23 4 Z"
            stroke="var(--gold)"
            strokeWidth="1.1"
          />
          <path
            d="M23 12 C 18 18, 18 22, 23 27 C 28 22, 28 18, 23 12 Z"
            stroke="var(--wine)"
            strokeWidth="0.9"
            opacity="0.6"
          />
        </svg>
      </RevealOnScroll>

      <RevealOnScroll delay={120}>
        <p className="eyebrow-quiet">the aathai parna of</p>
      </RevealOnScroll>

      <RevealOnScroll delay={220}>
        <h1 className="name-reveal__name">
          Jiya <span>Mehul Kothari</span>
        </h1>
      </RevealOnScroll>

      <RevealOnScroll delay={340}>
        <OrnamentDivider tone="gold" />
      </RevealOnScroll>
    </section>
  );
}
