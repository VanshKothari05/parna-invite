import RevealOnScroll from '../components/RevealOnScroll';

export default function FinalMoment() {
  return (
    <section className="section final-moment">
      <RevealOnScroll as="div" className="final-moment__glow">
        <svg width="86" height="86" viewBox="0 0 86 86" aria-hidden="true">
          <circle cx="43" cy="43" r="40" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.5" />
          <path
            d="M43 16 C 30 30, 30 44, 43 58 C 56 44, 56 30, 43 16 Z"
            stroke="var(--wine)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M43 27 C 36 34, 36 41, 43 48 C 50 41, 50 34, 43 27 Z"
            stroke="var(--gold)"
            strokeWidth="0.8"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </RevealOnScroll>
      <RevealOnScroll delay={120} className="devanagari final-moment__text" as="p">
        श्री आदिनाथाय नमः
      </RevealOnScroll>
    </section>
  );
}
