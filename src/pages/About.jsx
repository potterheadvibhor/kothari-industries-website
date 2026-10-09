import Heading from '../components/Heading.jsx'
import PageHeader from '../components/PageHeader.jsx'
import {
  about,
  csr,
  img,
  leaders,
  stats,
  team,
  timeline,
  values,
  vision2030,
} from '../data/site.js'

const sections = [
  ['story', 'Our story'],
  ['values', 'Values'],
  ['leadership', 'Leadership'],
  ['journey', 'Journey'],
  ['team', 'Team'],
  ['vision-2030', 'Vision 2030'],
  ['community', 'Community'],
]

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Leader({ leader, flip }) {
  return (
    <article
      className={`grid items-center gap-10 lg:gap-16 ${
        flip
          ? 'lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]'
          : 'lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]'
      }`}
    >
      {/* Portrait cut to the logo's chevron, with orange and charcoal bars */}
      <div
        data-reveal={flip ? 'right' : 'left'}
        className={`relative mx-auto w-full max-w-sm ${flip ? 'lg:order-2' : ''}`}
      >
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
          loading="lazy"
          className={`relative w-full object-cover object-top ${leader.square ? 'aspect-square' : 'aspect-[3/4]'} [clip-path:polygon(34%_0,100%_0,100%_100%,34%_100%,0_50%)]`}
        />
      </div>

      <div>
        <Heading as="h3" lines={leader.headline} />
        <div data-reveal className="mt-6 flex max-w-[65ch] flex-col gap-4 text-slate-soft">
          {leader.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <p data-reveal data-delay="200" className="mt-6 border-l-4 border-brand pl-4">
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
      <PageHeader lines={about.headline} image="photos/cranes.webp" />

      <div className="border-b border-line bg-white">
        <nav aria-label="On this page" className="wrap flex flex-wrap gap-2 py-4">
          {sections.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => goTo(id)}
              className="display min-h-11 border-2 border-line bg-white px-4 pb-1 pt-2 text-xl font-medium tracking-wide text-slate hover:border-slate"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Our story */}
      <section id="story" className="wrap scroll-mt-40 py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-16">
          <div>
            <h2 data-reveal className="display text-4xl text-slate md:text-5xl">Our story</h2>
            <div data-reveal data-delay="100" className="mt-5 flex max-w-[65ch] flex-col gap-5 text-lg text-slate-soft">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 data-reveal className="display text-4xl text-slate md:text-5xl">
              A journey shaped by our people
            </h2>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  data-reveal
                  data-delay={String((i % 3) * 100)}
                  className="flex flex-col-reverse justify-end border-l-4 border-brand pl-4"
                >
                  <dt className="text-[0.95rem] text-slate-soft">{s.label}</dt>
                  <dd data-count className="display text-5xl tabular-nums text-slate">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Mission, vision and values */}
      <section id="values" className="relative isolate scroll-mt-40 bg-slate-deep">
        <img
          src={img('photos/seedling.webp')}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover opacity-60"
        />
        <div className="wrap py-16 md:py-20">
          <div className="grid gap-px bg-line md:grid-cols-2">
            {[
              ['Mission', about.mission],
              ['Vision', about.vision],
            ].map(([title, text], i) => (
              <div key={title} data-reveal data-delay={String(i * 150)} className="bg-white p-7 md:p-9">
                <h2 className="display inline-block bg-blue px-3 pb-0.5 pt-2 text-3xl text-white">
                  {title}
                </h2>
                <p className="mt-4 text-lg text-slate">{text}</p>
              </div>
            ))}
          </div>

          <Heading
            lines={['Core values', 'that guide our every step.']}
            onDark
            className="mt-14"
          />
          <ul className="mt-8 grid gap-px bg-white/25 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <li key={v.name} data-reveal data-delay={String((i % 3) * 100)} className="bg-slate-deep/85 p-7 backdrop-blur-sm">
                <h3 className="display text-3xl text-brand">{v.name}</h3>
                <p className="mt-2 text-white/85">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="wrap flex scroll-mt-40 flex-col gap-20 py-16 md:py-24">
        <h2 className="sr-only">Leadership</h2>
        {leaders.map((l, i) => (
          <Leader key={l.name} leader={l} flip={i % 2 === 1} />
        ))}
      </section>

      {/* Journey */}
      <section id="journey" className="scroll-mt-40 bg-paper">
        <div className="wrap py-16 md:py-20">
          <Heading lines={['Our journey', 'since 1955.']} />
          <ol className="mt-10 border-l-2 border-slate">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                data-reveal="left"
                className="relative grid gap-x-8 gap-y-1 pb-7 pl-7 last:pb-0 md:grid-cols-[11rem_minmax(0,1fr)]"
              >
                <span
                  className={`absolute -left-[9px] top-2 size-4 ${i % 2 ? 'bg-blue' : 'bg-brand'}`}
                  aria-hidden="true"
                />
                <h3
                  className={`display text-4xl tabular-nums ${i % 2 ? 'text-blue-dark' : 'text-brand-dark'}`}
                >
                  {t.year}
                </h3>
                {t.events.length === 1 ? (
                  <p className="max-w-[65ch] pt-1 text-slate">{t.events[0]}</p>
                ) : (
                  <ul className="flex max-w-[65ch] flex-col gap-2 pt-1 text-slate">
                    {t.events.map((e) => (
                      <li key={e.slice(0, 32)}>{e}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="wrap scroll-mt-40 py-16 md:py-20">
        <Heading lines={['Behind every achievement', 'is a team that cares.']} />
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {team.map((p, i) => (
            <li key={p.name} data-reveal data-delay={String((i % 4) * 100)}>
              <img
                src={img(p.photo)}
                alt=""
                width="336"
                height="347"
                loading="lazy"
                className="chamfer aspect-[9/10] w-full bg-paper object-cover object-top"
              />
              <h3 className="display mt-3 text-2xl font-medium leading-none text-slate">{p.name}</h3>
              <p className="mt-1 text-[0.95rem] text-slate-soft">{p.role}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Vision 2030 */}
      <section id="vision-2030" className="scroll-mt-40 bg-slate-deep text-white">
        <div className="wrap py-16 md:py-20">
          <Heading lines={vision2030.headline} onDark />
          <p data-reveal className="mt-5 max-w-[70ch] text-lg text-white/85">{vision2030.text}</p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="display text-3xl">Major objectives for 2030 business strategy</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {vision2030.objectives.map((o, i) => (
                  <li key={o} data-reveal="left" data-delay={String(i * 100)} className="chamfer bg-white py-4 pl-5 pr-10 font-medium text-slate">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="display text-3xl">Vision 2030: our strategic targets</h3>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-7">
                {vision2030.targets.map((t, i) => (
                  <div key={t.label} data-reveal data-delay={String(i * 100)} className="flex flex-col border-t-2 border-white/40 pt-3">
                    <dt className="order-2 font-semibold">{t.label}</dt>
                    <dd data-count className="display order-1 text-6xl tabular-nums text-brand">{t.value}</dd>
                    <dd className="order-3 text-[0.95rem] text-white/75">{t.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="wrap scroll-mt-40 py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <Heading lines={csr.headline} />
            <div data-reveal className="mt-6 flex max-w-[65ch] flex-col gap-5 text-lg text-slate-soft">
              {csr.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <img
            data-reveal="right"
            src={img('photos/planting.webp')}
            alt="Hands planting a sapling in fresh soil"
            loading="lazy"
            className="chamfer aspect-[4/3] w-full object-cover"
          />
        </div>
        <h3 data-reveal className="display mt-12 text-3xl text-slate md:text-4xl">
          Touching lives, building futures
        </h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {csr.initiatives.map((c, i) => (
            <li key={c.name} data-reveal data-delay={String(i * 150)} className="flex flex-col bg-paper">
              <img
                src={img(c.image)}
                alt=""
                width="352"
                height="219"
                loading="lazy"
                className="chamfer aspect-[8/5] w-full object-cover"
              />
              <div className="p-5">
                <h4 className="display text-2xl font-medium text-slate">{c.name}</h4>
                <p className="mt-1 text-slate-soft">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
