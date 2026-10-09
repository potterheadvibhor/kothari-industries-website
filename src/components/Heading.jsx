import Words from './Words.jsx'

// The brochure's two-line headline: first line orange, second line charcoal.
// Words rise into place when the heading scrolls into view.
export default function Heading({ lines, as: Tag = 'h2', className = '', onDark = false }) {
  const [first, ...rest] = lines
  const firstCount = first.split(' ').length
  return (
    <Tag data-split className={`display text-[clamp(2.6rem,6vw,4.25rem)] ${className}`}>
      <span className={`block ${onDark ? 'text-brand' : 'text-brand-ink'}`}>
        <Words text={first} />
      </span>
      {rest.map((l, i) => (
        <span key={l} className={`block ${onDark ? 'text-white' : 'text-slate'}`}>
          <Words text={l} start={(firstCount + i * 3) * 70} />
        </span>
      ))}
    </Tag>
  )
}
