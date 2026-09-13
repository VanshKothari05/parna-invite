import RevealOnScroll from '../components/RevealOnScroll';
import OrnamentDivider from '../components/OrnamentDivider';

export default function InvitationStatement() {
  return (
    <section className="section invitation-statement">
      <RevealOnScroll>
        <OrnamentDivider />
      </RevealOnScroll>
      <RevealOnScroll delay={100}>
        <p className="invitation-statement__text">
          You are cordially invited to the Aathai Parna of{' '}
          <span className="invitation-statement__name">Jiya Mehul Kothari</span>
        </p>
      </RevealOnScroll>
    </section>
  );
}
