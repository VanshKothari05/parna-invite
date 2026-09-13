import ChapterReveal from '../components/ChapterReveal';

export default function EventChapter() {
  return (
    <section className="ch ch-event">
      <div className="ch-event__composition">

        {/* 18 / September / Friday */}
        <ChapterReveal delay={0}>
          <span className="ch-event__date-num">18</span>
          <span className="ch-event__date-month">September · 2026</span>
          <span className="ch-event__date-day">Friday</span>
        </ChapterReveal>

        {/* Ornamental separator */}
        <ChapterReveal delay={0.2}>
          <div className="ch-event__sep" aria-hidden="true">
            <span className="ch-event__sep-line" />
            <span className="ch-event__sep-lotus">✦</span>
            <span className="ch-event__sep-line" />
          </div>
        </ChapterReveal>

        {/* Time */}
        <ChapterReveal delay={0.38}>
          <span className="ch-event__time">10:30 AM</span>
          <span className="ch-event__time-to">to</span>
          <span className="ch-event__time">1:00 PM</span>
        </ChapterReveal>
      </div>
    </section>
  );
}
