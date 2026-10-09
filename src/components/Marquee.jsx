// A row of names that scrolls sideways forever. Pauses on hover; for visitors
// who ask for reduced motion it becomes a plain wrapped list (see index.css).
export default function Marquee({ items, reverse = false, label }) {
  const row = (hidden) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="marquee-item">
          {t}
        </li>
      ))}
    </ul>
  )
  return (
    <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`} aria-label={label} role="group">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
