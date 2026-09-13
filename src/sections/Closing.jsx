import RevealOnScroll from '../components/RevealOnScroll';
import OrnamentDivider from '../components/OrnamentDivider';

export default function Closing() {
  return (
    <section className="section closing">
      <RevealOnScroll>
        <OrnamentDivider tone="gold" />
      </RevealOnScroll>
      <RevealOnScroll delay={100}>
        <p className="closing__rsvp">RSVP</p>
        <p className="closing__family">Kothari Family</p>
      </RevealOnScroll>
    </section>
  );
}
