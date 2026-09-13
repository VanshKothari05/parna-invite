const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };

export function IconCalendar(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.4" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4M16 3v4" />
      <path d="M8 14.2h2M11.5 14.2h2M15 14.2h2M8 17.4h2" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2.2" />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 21c4-4.2 7-7.9 7-11.3A7 7 0 0 0 5 9.7C5 13.1 8 16.8 12 21Z" />
      <circle cx="12" cy="9.6" r="2.4" />
    </svg>
  );
}

export function IconParking(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...common} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9.5 16V8h3.1a2.6 2.6 0 1 1 0 5.2H9.5" />
    </svg>
  );
}

export function IconArrowRight(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...common} {...props}>
      <path d="M5 12h13.5" />
      <path d="M13 6.5 18.5 12 13 17.5" />
    </svg>
  );
}
