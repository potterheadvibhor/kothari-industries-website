import { Link } from 'react-router-dom'
import Heading from '../components/Heading.jsx'
import { about, brands, categories, clients, company, img, stats } from '../data/site.js'

// The four cover photos, split by the "K" chevron from the logo.
function HeroMosaic() {
  const tiles = [
    ['photos/pipes.webp', 'Steel pipes stacked in a yard'],
    ['photos/scaffolding.webp', 'Scaffolding around a building under construction'],
    ['photos/foundation-bolts.webp', 'Galvanised foundation bolts'],
    ['photos/nuts.webp', 'Hex nuts and bolts'],
  ]
  return (
    <div className="relative">
      <div className="absolute -right-3 -bottom-3 left-8 top-8 border-2 border-brand" aria-hidden="true" />
      <div className="relative grid aspect-[5/4] grid-cols-[1.25fr_1fr] grid-rows-2 gap-1.5 bg-white">
        {tiles.map(([src, alt]) => (
          <img key={src} src={img(src)} alt={alt} className="size-full min-h-0 object-cover" />
        ))}
        <svg
          className="pointer-events-none absolute inset-0 size-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="46,-6 14,50 46,106"
            fill="none"
            stroke="#fff"
            strokeWidth="14"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="wrap grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <h1 className="display text-[clamp(4.25rem,13vw,8.5rem)] text-slate">
              <span className="mb-[0.06em] inline-block bg-brand px-[0.12em] pt-[0.1em] text-slate-deep">
                Products
              </span>
              <span className="block">that last.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-soft">
              Industrial fasteners, scaffolding materials, holding down bolts and construction
              hardware from {company.group}. Manufacturing since {company.founded}, {company.iso}{' '}
              certified.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn btn-primary">
                See the product range
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Send an enquiry
              </Link>
            </div>
          </div>
          <HeroMosaic />
        </div>
      </section>

      {/* Figures from the catalogue */}
      <section aria-label="Kothari Industries in numbers" className="bg-slate text-white">
        <dl className="wrap grid grid-cols-2 gap-x-6 gap-y-6 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end border-l-4 border-brand pl-4">
              <dt className="text-[0.95rem] text-white/75">{s.label}</dt>
              <dd className="display text-5xl tabular-nums md:text-6xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Product range */}
      <section className="wrap py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading lines={['Our manufacturing', 'product range.']} />
          <Link to="/products" className="btn btn-dark">
            All {categories.reduce((n, c) => n + c.items.length, 0)} products
          </Link>
        </div>
        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <li key={c.id}>
              <Link to={`/products?category=${c.id}`} className="group flex h-full flex-col">
                <span className="tab self-start">{c.name}</span>
                <span className="block border border-brand bg-white shadow-[6px_6px_0_var(--color-paper)] transition-shadow group-hover:shadow-[6px_6px_0_var(--color-slate)]">
                  <img
                    src={img(c.items[0].image)}
                    alt=""
                    width="560"
                    height="404"
                    loading="lazy"
                    className="aspect-[7/5] w-full object-cover"
                  />
                </span>
                <span className="mt-4 block text-slate-soft">{c.blurb}</span>
                <span className="mt-2 block font-medium text-brand-dark underline decoration-1 underline-offset-4">
                  View {c.items.length} products
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section className="bg-slate-deep text-white">
        <div className="grid lg:grid-cols-2">
          <img
            src={img('photos/flyover.webp')}
            alt="An illuminated flyover curving through Kolkata at night"
            width="1700"
            height="825"
            loading="lazy"
            className="h-64 w-full object-cover sm:h-80 lg:h-full"
          />
          <div className="px-5 py-14 md:px-8 lg:max-w-[38rem] lg:py-20 lg:pl-14">
            <Heading lines={about.headline} onDark />
            <p className="mt-5 text-white/80">{about.paragraphs[0]}</p>
            <Link
              to="/about"
              className="btn mt-8 border-2 border-white text-white hover:bg-white hover:text-slate-deep"
            >
              About the group
            </Link>
          </div>
        </div>
      </section>

      {/* Dealerships */}
      <section className="wrap py-16 md:py-20">
        <Heading lines={['Joining hands with', 'the best in the industry.']} />
        <p className="mt-4 max-w-2xl text-slate-soft">
          Kothari Industries is an authorised dealer for eight brands, covering anchors and
          chemicals, pipes, power tools and light construction equipment.
        </p>
        <ul className="mt-8 grid grid-cols-2 border-l border-t border-line md:grid-cols-4">
          {brands.map((b) => (
            <li key={b.id} className="border-b border-r border-line">
              <Link
                to={`/brands?brand=${b.id}`}
                className="display block px-4 pb-4 pt-6 text-center text-3xl font-medium text-slate hover:bg-brand hover:text-slate-deep md:text-4xl"
              >
                {b.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Clients */}
      <section className="bg-paper">
        <div className="wrap py-16 md:py-20">
          <Heading lines={['Our esteemed', 'clients.']} />
          <ul className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((c) => (
              <li key={c} className="border-b border-line py-3 font-medium text-slate">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Enquiry band */}
      <section className="bg-brand text-slate-deep">
        <div className="wrap flex flex-wrap items-center justify-between gap-6 py-10">
          <div>
            <h2 className="display text-4xl md:text-5xl">Need a quotation?</h2>
            <p className="mt-1 text-lg">
              Call the helpline on <span className="font-semibold">{company.helpline}</span> or send
              us your requirement.
            </p>
          </div>
          <Link to="/contact" className="btn btn-dark">
            Send an enquiry
          </Link>
        </div>
      </section>
    </>
  )
}
