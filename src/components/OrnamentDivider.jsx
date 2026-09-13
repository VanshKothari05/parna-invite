/** Kept for backward-compat if any old section still references it. */
export default function OrnamentDivider({ tone = 'wine' }) {
  const stroke = tone === 'gold' ? 'var(--gold)' : 'var(--wine)';
  return (
    <div className="ornament-divider" role="presentation" aria-hidden="true">
      <span className="ornament-divider__line" style={{ background: stroke }} />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 C8 7, 8 11, 12 16 C16 11, 16 7, 12 2 Z" stroke={stroke} strokeWidth="1.1" />
        <circle cx="12" cy="19.5" r="1.6" fill={stroke} />
      </svg>
      <span className="ornament-divider__line" style={{ background: stroke }} />
    </div>
  );
}
