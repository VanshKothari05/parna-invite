/**
 * Decorative SVG mandala with Jain 8-fold geometry.
 * Used as a subtle background element in Opening and Blessings chapters.
 * Rendered at very low opacity (set via className/style on the wrapper).
 */
export default function Mandala({ size = 240, className = '', style = {} }) {
  const cx = 120, cy = 120;

  /* 8-petal lotus */
  const petals = Array.from({ length: 8 }, (_, i) => {
    const a  = ((i * 45) - 90) * (Math.PI / 180);
    const a1 = a - 0.26;
    const a2 = a + 0.26;
    const rOuter = 92, rMid = 66;
    const x1 = cx + rOuter * Math.cos(a1);
    const y1 = cy + rOuter * Math.sin(a1);
    const xm = cx + rMid  * Math.cos(a);
    const ym = cy + rMid  * Math.sin(a);
    const x2 = cx + rOuter * Math.cos(a2);
    const y2 = cy + rOuter * Math.sin(a2);
    return `M${cx},${cy} Q${x1},${y1} ${xm},${ym} Q${x2},${y2} ${cx},${cy}`;
  });

  /* Tick marks (32) around outer ring */
  const ticks = Array.from({ length: 32 }, (_, i) => {
    const a     = ((i * 11.25) - 90) * (Math.PI / 180);
    const inner = i % 4 === 0 ? 104 : i % 2 === 0 ? 108 : 112;
    return {
      x1: cx + inner * Math.cos(a),
      y1: cy + inner * Math.sin(a),
      x2: cx + 117  * Math.cos(a),
      y2: cy + 117  * Math.sin(a),
      bold: i % 4 === 0,
    };
  });

  /* 8-axis grid lines */
  const axes = Array.from({ length: 8 }, (_, i) => {
    const a = (i * 22.5 - 90) * (Math.PI / 180);
    return {
      x1: cx - 96 * Math.cos(a), y1: cy - 96 * Math.sin(a),
      x2: cx + 96 * Math.cos(a), y2: cy + 96 * Math.sin(a),
    };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Outermost ring */}
      <circle cx={cx} cy={cy} r={117} stroke="currentColor" strokeWidth="0.6" />

      {/* Tick marks */}
      {ticks.map((t, i) => (
        <line key={i}
          x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          stroke="currentColor"
          strokeWidth={t.bold ? '0.9' : '0.45'}
          opacity={t.bold ? 1 : 0.6}
        />
      ))}

      {/* Outer lotus ring */}
      <circle cx={cx} cy={cy} r={97} stroke="currentColor" strokeWidth="0.5" opacity="0.7" />

      {/* 8-petal lotus */}
      {petals.map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.65" />
      ))}

      {/* Grid axes */}
      {axes.map((ax, i) => (
        <line key={i}
          x1={ax.x1} y1={ax.y1} x2={ax.x2} y2={ax.y2}
          stroke="currentColor" strokeWidth="0.3" opacity="0.22"
        />
      ))}

      {/* Middle ring */}
      <circle cx={cx} cy={cy} r={60} stroke="currentColor" strokeWidth="0.5" opacity="0.6" />

      {/* Inner 8-point star points */}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * 45 - 90) * (Math.PI / 180);
        const x1 = cx + 57 * Math.cos(a);
        const y1 = cy + 57 * Math.sin(a);
        const x2 = cx + 40 * Math.cos(a + 0.39);
        const y2 = cy + 40 * Math.sin(a + 0.39);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.6" opacity="0.45" />;
      })}

      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={30} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

      {/* Innermost ring */}
      <circle cx={cx} cy={cy} r={13} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

      {/* Centre */}
      <circle cx={cx} cy={cy} r={2.5} fill="currentColor" opacity="0.55" />
    </svg>
  );
}
