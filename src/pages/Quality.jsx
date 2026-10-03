import Heading from '../components/Heading.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { awards, company, img, quality } from '../data/site.js'

export default function Quality() {
  return (
    <>
      <PageHeader lines={quality.headline} />

      <section className="wrap grid items-start gap-12 py-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
        <div className="flex max-w-[65ch] flex-col gap-5 text-lg text-slate-soft">
          {quality.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mx-auto w-full max-w-xs">
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 left-6 top-6 border-2 border-brand" aria-hidden="true" />
            <img
              src={img('photos/micrometer.webp')}
              alt="A micrometer measuring the thread of a hex bolt"
              width="249"
              height="337"
              loading="lazy"
              className="relative w-full"
            />
          </div>
          <p className="mt-8 border-l-4 border-brand pl-4">
            <span className="display block text-4xl text-slate">{company.iso}</span>
            <span className="text-slate-soft">Certified company</span>
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap py-16 md:py-20">
          <Heading lines={['A peek into our', 'peak performances.']} />
          <ul className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {awards.map((a) => (
              <li key={a.name} className="flex flex-col bg-white">
                <img
                  src={img(a.image)}
                  alt={`${a.name} ${a.year}`}
                  loading="lazy"
                  className="aspect-[2/3] w-full object-cover"
                />
                <p className="flex flex-1 flex-col border-b-[6px] border-brand bg-slate px-4 py-4 text-white">
                  <span className="display text-2xl font-medium leading-none">{a.name}</span>
                  <span className="mt-1 tabular-nums text-white/75">{a.year}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
