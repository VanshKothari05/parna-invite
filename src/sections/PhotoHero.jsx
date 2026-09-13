import RevealOnScroll from '../components/RevealOnScroll';

export default function PhotoHero() {
  return (
    <section className="section photo-hero">
      <RevealOnScroll className="photo-hero__frame" as="div">
        <svg className="photo-hero__ring" viewBox="0 0 320 320" aria-hidden="true">
          <circle cx="160" cy="160" r="152" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.7" />
          <circle cx="160" cy="160" r="140" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.35" />
        </svg>
        <div className="photo-hero__image-wrap">
          <img src="/images/jiya.jpg" alt="Jiya Mehul Kothari" className="photo-hero__image" />
        </div>
      </RevealOnScroll>
    </section>
  );
}
