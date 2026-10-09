import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { brands, channelPartners, img, supplyLines } from '../data/site.js'

const goTo = (id) =>
  document.getElementById(`brand-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

const enquire = (name) => `/contact?product=${encodeURIComponent(name)}`

function SupplyLine({ line }) {
  return (
    <section
      id={`brand-${line.id}`}
      aria-labelledby={`brand-h-${line.id}`}
      data-reveal
      className="scroll-mt-40 bg-paper"
    >
      <img
        src={img(line.image)}
        alt=""
        width="532"
        height="155"
        loading="lazy"
        className="chamfer aspect-[7/2] w-full object-cover"
      />
      <div className="p-6">
        <h2 id={`brand-h-${line.id}`} className="display text-4xl text-slate">
          {line.name}
        </h2>
        <p className="mt-1 text-slate-soft">{line.text}</p>
        <Link
          to={enquire(line.name)}
          className="mt-4 inline-block text-[0.95rem] font-medium text-brand-dark underline decoration-1 underline-offset-4 hover:text-slate-deep"
        >
          Enquire about this<span className="sr-only">: {line.name}</span>
        </Link>
      </div>
    </section>
  )
}

export default function Brands() {
  const [params] = useSearchParams()
  const target = params.get('brand')

  // Arriving from a brand link on the home page: jump to that brand
  useEffect(() => {
    if (target) requestAnimationFrame(() => goTo(target))
  }, [target])

  const stp = supplyLines.find((l) => l.partner)
  const others = supplyLines.filter((l) => !l.partner)

  return (
    <>
      <PageHeader
        lines={['Authorized dealer for trusted', 'and authentic products.']}
        image="photos/tower-scaffold.webp"
      >
        We are channel partners for Fischer, Zydex, Supreme and STP Limited, and supply pipes, pipe
        fittings, electrical goods and cables.
      </PageHeader>

      <div className="wrap py-10">
        <nav aria-label="Brands" className="flex flex-wrap gap-2">
          {channelPartners.concat(others).map((b) => (
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
              <div className="grid items-end gap-6 border-b-2 border-slate pb-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
                <div data-reveal="left">
                  <h2 id={`brand-h-${b.id}`} className="display text-5xl text-slate md:text-6xl">
                    {b.name}
                  </h2>
                  <p className="text-brand-dark">Channel partner</p>
                </div>
                <img
                  data-reveal="right"
                  src={img(b.banner)}
                  alt={`${b.name} products`}
                  loading="lazy"
                  className="chamfer aspect-[12/5] w-full object-cover"
                />
              </div>
              <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {b.items.map((p) => (
                  <ProductCard key={p.name} {...p} enquiry={`${b.name} ${p.name}`} />
                ))}
              </ul>
            </section>
          ))}

          {/* STP Limited: one group photo and a list, as in the brochure */}
          <section id={`brand-${stp.id}`} aria-labelledby={`brand-h-${stp.id}`} className="scroll-mt-40">
            <div className="flex flex-wrap items-baseline gap-x-4 border-b-2 border-slate pb-1">
              <h2 id={`brand-h-${stp.id}`} className="display text-5xl text-slate md:text-6xl">
                {stp.name}
              </h2>
              <p className="text-brand-dark">Channel partner</p>
            </div>
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
              <img
                src={img(stp.image)}
                alt="A range of STP Limited waterproofing and construction chemical products"
                data-reveal="left"
                loading="lazy"
                className="chamfer aspect-[7/2] w-full object-cover"
              />
              <div>
                <ul className="flex flex-wrap gap-2">
                  {stp.items.map((i) => (
                    <li key={i} className="tab">
                      {i}
                    </li>
                  ))}
                </ul>
                <Link
                  to={enquire(stp.name)}
                  className="mt-4 inline-block text-[0.95rem] font-medium text-brand-dark underline decoration-1 underline-offset-4 hover:text-slate-deep"
                >
                  Enquire about this<span className="sr-only">: {stp.name}</span>
                </Link>
              </div>
            </div>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            {others.map((l) => (
              <SupplyLine key={l.id} line={l} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
