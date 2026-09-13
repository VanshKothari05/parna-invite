import RevealOnScroll from '../components/RevealOnScroll';
import { IconCalendar, IconClock } from '../components/Icons';

export default function EventDetails() {
  return (
    <section className="section event-details">
      <div className="detail-row">
        <RevealOnScroll className="detail-card" as="div">
          <IconCalendar className="detail-card__icon" />
          <p className="detail-card__label">Date</p>
          <p className="detail-card__value">18 September 2026</p>
          <p className="detail-card__sub">Friday</p>
        </RevealOnScroll>

        <RevealOnScroll className="detail-card" delay={100} as="div">
          <IconClock className="detail-card__icon" />
          <p className="detail-card__label">Time</p>
          <p className="detail-card__value">10:30 AM</p>
          <p className="detail-card__sub">to 1:00 PM</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
