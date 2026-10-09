// Scroll-driven text animation for the whole site, with no library.
//
// Mark an element and it animates the first time it scrolls into view:
//   <Words>            headings split into words that rise out of a mask
//   data-reveal        any block fades and slides up ("up"), or in from a side ("left" / "right")
//   data-count         a figure such as "300+" or "5,000+" counts up from zero
//   data-delay="200"   optional extra delay in ms for data-reveal
//
// Everything is visible without JavaScript and for visitors who ask their
// system for reduced motion: the hiding CSS only applies under html.motion.

const SELECTOR = '[data-split], [data-reveal], [data-count]'

function countUp(el) {
  const text = el.textContent
  const m = text.match(/^(\D*)([\d,]+)(.*)$/)
  if (!m) return
  const [, before, num, after] = m
  const target = Number(num.replace(/,/g, ''))
  const grouped = num.includes(',')
  const duration = Math.min(2000, 900 + target * 2)
  const start = performance.now()
  const fmt = (n) => (grouped ? n.toLocaleString('en-IN') : String(n))
  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = before + fmt(Math.round(target * eased)) + after
    if (t < 1) requestAnimationFrame(tick)
  }
  el.textContent = before + fmt(0) + after
  requestAnimationFrame(tick)
}

export function startMotion() {
  const root = document.documentElement
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || !('IntersectionObserver' in window)) return

  root.classList.add('motion')

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const el = e.target
        io.unobserve(el)
        if (el.hasAttribute('data-count')) countUp(el)
        el.classList.add('is-in')
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )

  const watch = (node) => {
    if (!(node instanceof Element)) return
    if (node.matches(SELECTOR)) io.observe(node)
    node.querySelectorAll(SELECTOR).forEach((n) => io.observe(n))
  }

  watch(document.body)
  // Pages render as you navigate, so pick up new elements as they appear
  new MutationObserver((list) => {
    for (const m of list) m.addedNodes.forEach(watch)
  }).observe(document.body, { childList: true, subtree: true })
}
