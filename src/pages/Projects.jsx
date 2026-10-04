import Heading from '../components/Heading.jsx'
import { img, industries, nalJal, projects } from '../data/site.js'

export default function Projects() {
  return (
    <>
      {/* Page top over the brochure's bridge photo */}
      <div className="relative isolate bg-slate-deep">
        <img
          src={img('photos/bridge.webp')}
          alt=""
          className="absolute inset-0 -z-10 size-full object-cover opacity-40"
        />
        <div className="wrap py-14 md:py-20">
          <Heading
            as="h1"
            lines={['Our recent', 'projects.']}
            onDark
            className="text-[clamp(3rem,8vw,5.5rem)]"
          />
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Refineries, steel and power plants, railways and expressways. These are some of the
            sites our products have gone into, and what we supplied to each.
          </p>
        </div>
      </div>

      <section className="wrap py-16">
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <li key={p.name}>
              <img
                src={img(p.image)}
                alt=""
                width="600"
                height="522"
                loading="lazy"
                className="chamfer aspect-[4/3] w-full object-cover"
              />
              <h2 className="display mt-3 text-3xl font-medium leading-none text-slate">{p.name}</h2>
              <p className="mt-2 border-t border-line pt-2 text-[0.95rem] text-slate-soft">
                {p.supplied}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Nal Jal Yojana */}
      <section className="bg-blue text-white">
        <div className="wrap grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <h2 className="display text-[clamp(2.6rem,6vw,4.25rem)]">
              <span className="block">{nalJal.headline[0]}</span>
              <span className="block text-slate-deep">{nalJal.headline[1]}</span>
            </h2>
            <p className="mt-3 text-lg font-medium">{nalJal.scope}</p>

            <dl className="mt-8 grid grid-cols-2 gap-6">
              {nalJal.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse justify-end border-l-4 border-white pl-4">
                  <dt>{s.label}</dt>
                  <dd className="display text-6xl tabular-nums md:text-7xl">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex max-w-[65ch] flex-col gap-4 bg-white p-6 text-slate md:p-8">
              {nalJal.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <ul className="grid grid-cols-2 content-start gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {nalJal.photos.map((src, i) => (
              <li key={src} className={i === 0 ? 'col-span-2 sm:col-span-1 lg:col-span-2' : ''}>
                <img
                  src={img(src)}
                  alt={`Water tank structure ${i + 1} built under the Nal Jal Yojana`}
                  width="520"
                  height="722"
                  loading="lazy"
                  className={`chamfer w-full object-cover ${
                    i === 0 ? 'aspect-[4/3] sm:aspect-[3/4] lg:aspect-[5/4]' : 'aspect-[3/4]'
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="wrap py-16 md:py-20">
        <Heading lines={['Major industries', 'we serve.']} />
        <ul className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((i) => (
            <li key={i} className="border-b border-line py-3 font-medium text-slate">
              {i}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
