import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { categories } from '../data/site.js'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const active = categories.find((c) => c.id === params.get('category'))?.id ?? 'all'
  const shown = active === 'all' ? categories : categories.filter((c) => c.id === active)
  const total = categories.reduce((n, c) => n + c.items.length, 0)

  const filters = [{ id: 'all', name: 'All products', count: total }].concat(
    categories.map((c) => ({ id: c.id, name: c.name, count: c.items.length })),
  )

  return (
    <>
      <PageHeader lines={['Manufacturing', 'products range.']}>
        Quality and strength you can rely on. Choose a category, or ask about any item for sizes,
        grades and prices.
      </PageHeader>

      <div className="wrap py-10">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={active === f.id}
              onClick={() => setParams(f.id === 'all' ? {} : { category: f.id })}
              className={`display min-h-11 border-2 px-4 pb-1 pt-2 text-xl font-medium tracking-wide ${
                active === f.id
                  ? 'border-slate bg-slate text-white'
                  : 'border-line bg-white text-slate hover:border-slate'
              }`}
            >
              {f.name} <span className="tabular-nums opacity-70">({f.count})</span>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-16">
          {shown.map((c) => (
            <section key={c.id} aria-labelledby={`cat-${c.id}`}>
              <div className="border-l-4 border-brand pl-4">
                <h2 id={`cat-${c.id}`} className="display text-4xl text-slate md:text-5xl">
                  {c.name}
                </h2>
                <p className="text-slate-soft">{c.blurb}</p>
              </div>
              <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((p) => (
                  <ProductCard key={p.name} {...p} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
