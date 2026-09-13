import ChapterReveal from '../components/ChapterReveal';

export default function TapasyaChapter() {
  return (
    <section className="ch ch-tapasya">
      {/* Charavala sweep — bottom decorative element */}
      <div className="ch-tapasya__sweep" aria-hidden="true">
        <CharavalaSweep />
      </div>

      <div className="ch-tapasya__inner">
        {/* EIGHT DAYS — dramatic left-entry reveal */}
        <ChapterReveal direction="left" delay={0} className="ch-tapasya__number-block">
          <div className="ch-tapasya__eight">EIGHT</div>
          <div className="ch-tapasya__days">D A Y S</div>
        </ChapterReveal>

        {/* Gold rule */}
        <ChapterReveal delay={0.12}>
          <div className="ch-tapasya__rule" aria-hidden="true" />
        </ChapterReveal>

        {/* "of tapasya" */}
        <ChapterReveal delay={0.24}>
          <p className="ch-tapasya__of">of tapasya</p>
        </ChapterReveal>

        {/* Supporting text */}
        <ChapterReveal delay={0.4}>
          <p className="ch-tapasya__desc">
            Held with quiet discipline and devotion, now finding its
            gentle completion. A moment of Parna — of purity meeting
            celebration — and we would be honoured to have you share
            it with us.
          </p>
        </ChapterReveal>
      </div>
    </section>
  );
}

/* Charavala-inspired filaments — graceful curved strokes */
function CharavalaSweep() {
  return (
    <svg
      viewBox="0 0 420 110"
      fill="none"
      preserveAspectRatio="none"
      className="ch-tapasya__sweep-svg"
    >
      {Array.from({ length: 13 }, (_, i) => {
        const x    = i * 36 - 24;
        const bend = (i % 3 === 0 ? 18 : i % 3 === 1 ? -10 : 6) + i * 1.5;
        return (
          <path
            key={i}
            d={`M${x},115 Q${x + bend},58 ${x + 14},0`}
            stroke="var(--gold)"
            strokeWidth="0.9"
            opacity={0.13 - i * 0.003}
          />
        );
      })}
    </svg>
  );
}
