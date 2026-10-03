import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { brands } from '../data/site.js'

const goTo = (id) =>
  document.getElementById(`brand-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export default function Brands() {
  const [params] = useSearchParams()
  const target = params.get('brand')

  // Arriving from a brand link on the home page: jump to that brand
  useEffect(() => {
    if (target) requestAnimationFrame(() => goTo(target))
  }, [target])

  return (
    <>
      <PageHeader lines={['Joining hands with', 'the best in the industry.']}>
        We are authorised dealers for eight brands. These are the product categories we supply
        from each.
      </PageHeader>

      <div className="wrap py-10">
        <nav aria-label="Brands" className="flex flex-wrap gap-2">
          {brands.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => goTo(b.id)}
              className="display min-h-11 border-2 border-line bg-white px-4 pb-1 pt-2 text-xl font-medium tracking-wide text-slate hover:border-slate"
            >
              {b.name}
            </button>
          ))}
        </nav>

        <div className="mt-12 flex flex-col gap-16">
          {brands.map((b) => (
            <section
              key={b.id}
              id={`brand-${b.id}`}
              aria-labelledby={`brand-h-${b.id}`}
              className="scroll-mt-40"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 border-b-2 border-slate pb-1">
                <h2 id={`brand-h-${b.id}`} className="display text-5xl text-slate md:text-6xl">
                  {b.name}
                </h2>
                <p className="text-slate-soft">Authorised dealer</p>
              </div>
              <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {b.items.map((p) => (
                  <ProductCard key={p.name} {...p} enquiry={`${b.name} ${p.name}`} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
