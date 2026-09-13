import Mandala from '../components/Mandala';
import ChapterReveal from '../components/ChapterReveal';

export default function BlessingsChapter() {
  return (
    <section className="ch ch-blessings">

      {/* Background mandala — centred, very faint */}
      <div className="ch-blessings__mandala-wrap" aria-hidden="true">
        <Mandala size={360} className="ch-blessings__mandala" />
      </div>

      <div className="ch-blessings__content">

        <ChapterReveal delay={0}>
          <p className="ch-blessings__blessing">
            With blessings &amp; joy
          </p>
        </ChapterReveal>

        <ChapterReveal delay={0.18}>
          <div className="ch-blessings__divider" aria-hidden="true">
            <span className="ch-blessings__div-line" />
            <span className="ch-blessings__div-mark">✦</span>
            <span className="ch-blessings__div-line ch-blessings__div-line--r" />
          </div>
        </ChapterReveal>

        <ChapterReveal delay={0.34}>
          <p className="ch-blessings__rsvp">RSVP</p>
          <p className="ch-blessings__family">Kothari Family</p>
        </ChapterReveal>

        <ChapterReveal delay={0.55}>
          <div className="ch-blessings__bottom-divider" aria-hidden="true">
            <span className="ch-blessings__div-line" />
            <span className="ch-blessings__div-line ch-blessings__div-line--r" />
          </div>
        </ChapterReveal>

        <ChapterReveal delay={0.7}>
          <p className="ch-blessings__mantra devanagari">
            श्री आदिनाथाय नमः
          </p>
        </ChapterReveal>
      </div>
    </section>
  );
}
