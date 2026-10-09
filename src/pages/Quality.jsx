import Heading from '../components/Heading.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { awards, img, memberships, quality, qualityPlan, whyUs } from '../data/site.js'

export default function Quality() {
  return (
    <>
      <PageHeader lines={quality.headline} image="photos/scaffold-grid.webp" />

      {/* Quality assurance and certifications */}
      <section className="wrap py-16">
        <h2 className="display text-4xl text-slate md:text-5xl">Quality assurance</h2>
        <div className="mt-5 flex max-w-[65ch] flex-col gap-5 text-lg text-slate-soft">
          {quality.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <ul className="mt-10 grid grid-cols-2 border-l border-t border-line lg:grid-cols-4">
          {quality.certifications.map((c, i) => (
            <li key={c.name} data-reveal data-delay={String(i * 100)} className="border-b border-r border-line p-6">
              <span className="display block text-4xl text-blue-dark md:text-5xl">{c.name}</span>
              <span className="text-slate-soft">{c.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quality assurance plan */}
      <section className="bg-paper">
        <div className="wrap grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div data-reveal="left" className="relative">
            <div className="absolute -bottom-3 -right-3 left-6 top-6 border-2 border-brand" aria-hidden="true" />
            <img
              src={img('photos/scaffolders.webp')}
              alt="Workers assembling orange scaffolding against a blue sky"
              width="1339"
              height="1039"
              loading="lazy"
              className="relative w-full"
            />
          </div>
          <div>
            <Heading lines={qualityPlan.headline} />
            <div className="mt-5 flex max-w-[65ch] flex-col gap-4 text-slate-soft">
              {qualityPlan.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            {qualityPlan.points.map((p, i) => (
              <li key={p.name} data-reveal data-delay={String(i * 150)} className="bg-white">
                <h3 className="display chamfer bg-blue px-5 pb-1.5 pt-3 text-2xl font-medium text-white">
                  {p.name}
                </h3>
                <p className="p-5 text-slate">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="wrap py-16 md:py-20">
        <Heading lines={whyUs.headline} />
        <div className="mt-5 flex max-w-[65ch] flex-col gap-4 text-lg text-slate-soft">
          {whyUs.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
          {whyUs.points.map((p, i) => (
            <li
              key={p}
              data-reveal="zoom"
              data-delay={String(i * 100)}
              className="display bg-white px-4 pb-4 pt-6 text-center text-2xl font-medium text-brand-dark"
            >
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section className="bg-paper">
        <div className="wrap py-16 md:py-20">
          <Heading lines={['Awards', 'and accolades.']} />
          <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {awards.map((a, i) => (
              <li key={a.image} data-reveal data-delay={String((i % 4) * 100)} className="flex flex-col">
                <img
                  src={img(a.image)}
                  alt=""
                  loading="lazy"
                  className="chamfer aspect-square w-full bg-white object-cover"
                />
                <p className="flex flex-1 flex-col border-b-[6px] border-brand bg-slate px-4 py-4 text-white">
                  <span className="display text-2xl font-medium leading-none">{a.name}</span>
                  <span className="mt-1 tabular-nums text-white/75">
                    {[a.year, a.kind].filter(Boolean).join(', ')}
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <h3 className="display mt-14 text-3xl text-slate">Associated member</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {memberships.map((m) => (
              <li key={m} className="border border-line bg-white px-3 py-1.5 font-medium text-slate">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
