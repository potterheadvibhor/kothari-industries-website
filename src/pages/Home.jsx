import { Link } from 'react-router-dom'
import Heading from '../components/Heading.jsx'
import Marquee from '../components/Marquee.jsx'
import Words from '../components/Words.jsx'
import {
  about,
  categories,
  channelPartners,
  clients,
  company,
  headlineStats,
  img,
  industries,
  oneTeam,
  projects,
  testimonials,
} from '../data/site.js'

// The brochure cover photo beside two product photos, split by the "K"
// chevron from the logo.
function HeroMosaic() {
  return (
    <div className="relative" data-reveal="zoom" data-delay="200">
      <div className="absolute -right-3 -bottom-3 left-8 top-8 border-2 border-brand" aria-hidden="true" />
      <div className="relative grid aspect-[5/4] grid-cols-[1.5fr_1fr] grid-rows-2 gap-1.5 bg-white">
        <img
          src={img('photos/cover-building.webp')}
          alt="A building under construction, braced with orange steel props"
          className="row-span-2 size-full min-h-0 object-cover object-[30%_50%]"
        />
        <img
          src={img('products/foundation-bolts.webp')}
          alt="Foundation bolts with plates and nuts"
          className="size-full min-h-0 object-cover"
        />
        <img
          src={img('products/telescopic-steel-props.webp')}
          alt="Blue telescopic steel props"
          className="size-full min-h-0 object-cover"
        />
        <svg
          className="pointer-events-none absolute inset-0 size-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="66,-6 50,50 66,106"
            fill="none"
            stroke="#fff"
            strokeWidth="10"
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
      <section className="overflow-hidden bg-paper">
        <div className="wrap grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p data-reveal className="display text-2xl font-medium tracking-wide text-blue-dark">
              {company.founded}. Years of trust
            </p>
            <h1 data-split className="display mt-1 text-[clamp(4.25rem,13vw,8.5rem)] text-slate">
              <span className="relative mb-[0.06em] inline-block px-[0.12em] pt-[0.1em] text-slate-deep">
                <span className="sweep absolute inset-0 -z-0 bg-brand" aria-hidden="true" />
                <span className="relative">
                  <Words text="Products" start={350} />
                </span>
              </span>
              <span className="block">
                <Words text="that last." start={550} step={110} />
              </span>
            </h1>
            <p data-reveal data-delay="500" className="mt-5 max-w-xl text-lg text-slate-soft">
              Industrial fasteners, scaffolding materials, holding down bolts and construction
              hardware from {company.group}. Manufacturing since {company.founded}.{' '}
              {company.certified}.
            </p>
            <div data-reveal data-delay="600" className="mt-8 flex flex-wrap gap-4">
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

      {/* Figures from the brochure, over its welding photo */}
      <section aria-label="Kothari Industries in numbers" className="relative isolate overflow-hidden bg-slate-deep text-white">
        <img
          src={img('photos/welder.webp')}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover object-[50%_75%] opacity-35"
        />
        <dl className="wrap grid grid-cols-2 gap-x-6 gap-y-6 py-10 md:grid-cols-4">
          {headlineStats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              data-delay={String(i * 100)}
              className="flex flex-col-reverse justify-end border-l-4 border-brand pl-4"
            >
              <dt className="text-[0.95rem] text-white/80">{s.label}</dt>
              <dd data-count className="display text-5xl tabular-nums md:text-6xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Product range */}
      <section className="wrap py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading lines={['Manufacturing', 'products range.']} />
          <Link data-reveal to="/products" className="btn btn-dark">
            All {categories.reduce((n, c) => n + c.items.length, 0)} products
          </Link>
        </div>
        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <li key={c.id} data-reveal data-delay={String(i * 100)}>
              <Link to={`/products?category=${c.id}`} className="group flex h-full flex-col">
                <span className="tab self-start">{c.name}</span>
                <span className="block overflow-hidden border border-brand bg-white shadow-[6px_6px_0_var(--color-paper)] transition-shadow group-hover:shadow-[6px_6px_0_var(--color-slate)]">
                  <img
                    src={img(c.cover)}
                    alt=""
                    width="560"
                    height="404"
                    loading="lazy"
                    className="aspect-[7/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

      {/* Our story */}
      <section className="bg-slate-deep text-white">
        <div className="grid lg:grid-cols-2">
          <div className="overflow-hidden">
            <img
              data-reveal="zoom"
              src={img('photos/cranes.webp')}
              alt="Tower cranes over high-rise construction at sunset"
              width="1400"
              height="1082"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80 lg:h-full"
            />
          </div>
          <div className="px-5 py-14 md:px-8 lg:max-w-[38rem] lg:py-20 lg:pl-14">
            <Heading lines={about.headline} onDark />
            <p data-reveal data-delay="200" className="mt-5 text-white/80">
              {about.paragraphs[0]}
            </p>
            <Link
              data-reveal
              data-delay="300"
              to="/about"
              className="btn mt-8 border-2 border-white text-white hover:bg-white hover:text-slate-deep"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* Recent projects */}
      <section className="wrap py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading lines={['Our recent', 'projects.']} />
          <Link data-reveal to="/projects" className="btn btn-dark">
            All projects
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 4).map((p, i) => (
            <li key={p.name} data-reveal data-delay={String(i * 100)}>
              <img
                src={img(p.image)}
                alt=""
                width="237"
                height="216"
                loading="lazy"
                className="chamfer aspect-[4/3] w-full object-cover"
              />
              <h3 className="display mt-3 text-2xl font-medium text-slate">{p.name}</h3>
              <p className="text-[0.95rem] text-slate-soft">{p.supplied}</p>
            </li>
          ))}
        </ul>

        <h3 data-reveal className="display mt-14 text-3xl text-slate">
          Major industries we serve
        </h3>
        <ul data-reveal data-delay="100" className="mt-4 flex flex-wrap gap-2">
          {industries.map((i) => (
            <li key={i} className="border border-line bg-paper px-3 py-1.5 text-[0.95rem] font-medium text-slate">
              {i}
            </li>
          ))}
        </ul>
      </section>

      {/* Dealerships */}
      <section className="bg-paper">
        <div className="wrap py-16 md:py-20">
          <Heading lines={['channel partners for trusted', 'and authentic products.']} />
          <p data-reveal className="mt-4 max-w-2xl text-slate-soft">
            Our channel partners, alongside pipes, pipe fittings, electrical goods and cables.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channelPartners.map((b, i) => (
              <li key={b.id} data-reveal data-delay={String(i * 100)}>
                <Link
                  to={`/brands?brand=${b.id}`}
                  className="group block overflow-hidden bg-white shadow-[0_1px_0_var(--color-line)]"
                >
                  <img
                    src={img(`dealers/${b.id}.webp`)}
                    alt=""
                    loading="lazy"
                    className="chamfer aspect-[12/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="display block border-b-4 border-brand px-4 pb-3 pt-4 text-3xl font-medium text-slate group-hover:text-brand-dark">
                    {b.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clients and what they say */}
      <section className="overflow-hidden py-16 md:py-20">
        <div className="wrap">
          <Heading lines={['Our', 'clients.']} />
        </div>
        <div data-reveal className="mt-8 flex flex-col gap-3">
          <Marquee items={clients.slice(0, 11)} label="Clients, part one" />
          <Marquee items={clients.slice(11)} reverse label="Clients, part two" />
        </div>

        <div className="wrap">
          <h3 data-reveal className="display mt-16 text-3xl text-slate md:text-4xl">
            Trusted feedback from valued industry partners
          </h3>
          <ul className="mt-6 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={t.from} className="flex" data-reveal data-delay={String(i * 150)}>
                <figure className="flex flex-col justify-between gap-5 border-l-4 border-brand bg-paper p-6">
                  <blockquote className="text-slate">“{t.text}”</blockquote>
                  <figcaption className="display text-2xl font-medium text-slate">{t.from}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* One voice, one team, one dream */}
      <section className="relative isolate overflow-hidden bg-slate-deep text-white">
        <img
          src={img('photos/sea-link.webp')}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover object-bottom opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-deep/70 to-transparent" aria-hidden="true" />
        <div className="wrap grid items-center gap-8 pb-40 pt-16 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14 md:pb-56 md:pt-20">
          <div data-split className="display flex items-center gap-5 leading-none">
            <span className="text-[clamp(5rem,14vw,9rem)]">
              <Words text="One" />
            </span>
            <span className="flex flex-col border-l-2 border-white/70 pl-5 text-3xl md:text-4xl">
              {oneTeam.words.map((w, i) => (
                <span key={w} className="block">
                  <Words text={w} start={250 + i * 150} />
                </span>
              ))}
            </span>
          </div>
          <p data-reveal data-delay="300" className="max-w-[60ch] text-lg text-white/90">
            {oneTeam.text}
          </p>
        </div>
      </section>

      {/* Enquiry band */}
      <section className="bg-brand text-slate-deep">
        <div className="wrap flex flex-wrap items-center justify-between gap-6 py-10">
          <div data-reveal="left">
            <h2 className="display text-4xl md:text-5xl">Need a quotation?</h2>
            <p className="mt-1 text-lg">
              Call the helpline on <span className="font-semibold">{company.helpline}</span>, message
              us on WhatsApp, or send your requirement.
            </p>
          </div>
          <Link data-reveal="right" to="/contact" className="btn btn-dark">
            Send an enquiry
          </Link>
        </div>
      </section>
    </>
  )
}
