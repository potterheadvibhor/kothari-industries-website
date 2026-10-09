import { Fragment } from 'react'

// Splits text into words that rise one after another (see lib/motion.js).
// `start` offsets the stagger so a second line continues after the first.
// The space between words sits outside each mask so it is never collapsed.
export default function Words({ text, start = 0, step = 70 }) {
  const words = text.split(' ')
  return words.map((w, i) => (
    <Fragment key={i}>
      <span className="word-mask">
        <span className="word" style={{ transitionDelay: `${start + i * step}ms` }}>
          {w}
        </span>
      </span>
      {i < words.length - 1 ? ' ' : null}
    </Fragment>
  ))
}
