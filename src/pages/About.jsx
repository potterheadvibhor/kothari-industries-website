import Heading from '../components/Heading.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { about, img, leaders, stats } from '../data/site.js'

function Leader({ leader, flip }) {
  return (
    <article
      className={`grid items-center gap-10 lg:gap-16 ${
        flip
          ? 'lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]'
          : 'lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]'
      }`}
    >
      {/* Portrait cut to the catalogue's chevron, with its orange and charcoal bars */}
      <div className={`relative mx-auto w-full max-w-sm ${flip ? 'lg:order-2' : ''}`}>
        <div
          className="absolute inset-0 -translate-x-3 bg-brand [clip-path:polygon(34%_0,100%_0,100%_50%,0_50%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -translate-x-3 bg-slate [clip-path:polygon(0_50%,100%_50%,100%_100%,34%_100%)]"
          aria-hidden="true"
        />
        <img
          src={img(leader.photo)}
          alt={leader.name}
          width="624"
          height="827"
          loading="lazy"
          className="relative aspect-[3/4] w-full object-cover object-top [clip-path:polygon(34%_0,100%_0,100%_100%,34%_100%,0_50%)]"
        />
      </div>

      <div>
        <Heading lines={leader.headline} />
        <blockquote className="mt-6 border-l-4 border-brand pl-5 text-xl font-medium leading-snug text-slate">
          “{leader.quote}”
        </blockquote>
        <div className="mt-6 flex max-w-[65ch] flex-col gap-4 text-slate-soft">
          {leader.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <p className="mt-6">
          <span className="display block text-3xl text-slate">{leader.name}</span>
          <span className="block text-brand-dark">{leader.role}</span>
        </p>
      </div>
    </article>
  )
}

export default function About() {
  return (
    <>
      <PageHeader lines={about.headline} />

      <section className="wrap grid gap-12 py-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div className="flex max-w-[65ch] flex-col gap-5 text-lg text-slate-soft">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <dl className="grid grid-cols-2 content-start gap-x-6 gap-y-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end border-l-4 border-brand pl-4">
              <dt className="text-[0.95rem] text-slate-soft">{s.label}</dt>
              <dd className="display text-6xl tabular-nums text-slate">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="relative isolate bg-slate-deep">
        <img
          src={img('photos/flyover.webp')}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover opacity-45"
        />
        <div className="wrap py-16 md:py-20">
          <div className="grid gap-px bg-line md:grid-cols-3">
            {[
              ['Mission', about.mission],
              ['Vision', about.vision],
            ].map(([title, text]) => (
              <div key={title} className="bg-white p-7 md:p-9">
                <h2 className="display inline-block bg-slate px-3 pb-0.5 pt-2 text-3xl text-white">
                  {title}
                </h2>
                <p className="mt-4 text-slate-soft">{text}</p>
              </div>
            ))}
            <div className="bg-white p-7 md:p-9">
              <h2 className="display inline-block bg-slate px-3 pb-0.5 pt-2 text-3xl text-white">
                Values
              </h2>
              <p className="mt-4 text-slate-soft">{about.valuesIntro}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.values.map((v) => (
                  <li key={v} className="tab">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap flex flex-col gap-20 py-16 md:py-24">
        {leaders.map((l, i) => (
          <Leader key={l.name} leader={l} flip={i % 2 === 1} />
        ))}
      </section>
    </>
  )
}
