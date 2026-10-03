// The catalogue's two-line headline: first line orange, second line charcoal.
export default function Heading({ lines, as: Tag = 'h2', className = '', onDark = false }) {
  const [first, ...rest] = lines
  return (
    <Tag className={`display text-[clamp(2.6rem,6vw,4.25rem)] ${className}`}>
      <span className={`block ${onDark ? 'text-brand' : 'text-brand-ink'}`}>{first}</span>
      {rest.map((l) => (
        <span key={l} className={`block ${onDark ? 'text-white' : 'text-slate'}`}>
          {l}
        </span>
      ))}
    </Tag>
  )
}
