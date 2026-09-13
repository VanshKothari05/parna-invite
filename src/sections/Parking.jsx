import RevealOnScroll from '../components/RevealOnScroll';
import { IconParking } from '../components/Icons';

export default function Parking() {
  return (
    <section className="section section--tight parking">
      <RevealOnScroll className="parking__pill" as="div">
        <IconParking />
        <span>Valet Parking Available</span>
      </RevealOnScroll>
    </section>
  );
}
