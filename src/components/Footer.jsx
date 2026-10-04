import { Link } from 'react-router-dom'
import { company, img, locations, nav, offices } from '../data/site.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const corporate = locations[0]

  return (
    <footer className="bg-slate-deep text-white/80">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.1fr_1.4fr_1fr_0.7fr]">
        <div className="flex flex-col items-start gap-5">
          <div className="bg-white p-4">
            <img
              src={img('logo-full.png')}
              alt="Kothari Industries, Manilal & Brothers Group"
              width="640"
              height="526"
              className="h-28 w-auto"
              loading="lazy"
            />
          </div>
          <p className="max-w-xs text-[0.95rem]">
            Industrial fasteners, scaffolding materials and holding down bolts since{' '}
            {company.founded}. {company.certified}.
          </p>
        </div>

        <div className="grid gap-6 text-[0.95rem]">
          <address className="not-italic">
            <h2 className="display mb-1 text-2xl font-medium text-white">{corporate.label}</h2>
            {corporate.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <div>
            <h2 className="display mb-1 text-2xl font-medium text-white">Offices</h2>
            <ul className="flex flex-col gap-0.5">
              {offices.map((o) => (
                <li key={o.label}>{o.label}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-1 inline-block text-brand hover:underline">
              Addresses and phone numbers
            </Link>
          </div>
        </div>

        <div className="text-[0.95rem]">
          <h2 className="display mb-1 text-2xl font-medium text-white">Talk to us</h2>
          <p>
            Helpline{' '}
            <a className="font-semibold text-brand hover:underline" href={company.helplineHref}>
              {company.helpline}
            </a>
          </p>
          <ul className="mt-1">
            {company.phones.map((p) => (
              <li key={p} className="tabular-nums">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-2">
            <a className="break-all hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <p className="break-all">{company.website}</p>
        </div>

        <nav aria-label="Footer" className="text-[0.95rem]">
          <h2 className="display mb-1 text-2xl font-medium text-white">Pages</h2>
          <ul className="flex flex-col gap-0.5">
            {nav.map((n) => (
              <li key={n.to}>
                <Link className="hover:text-white hover:underline" to={n.to}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <p className="wrap py-4 text-sm text-white/60">
          © {YEAR} {company.name}, {company.group}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
