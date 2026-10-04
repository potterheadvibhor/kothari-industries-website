import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, img, nav } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `display block px-2.5 pt-2 pb-1 text-[1.3rem] xl:px-3 xl:text-[1.35rem] font-medium tracking-wide border-b-[3px] ${
      isActive
        ? 'border-brand text-slate-deep'
        : 'border-transparent text-slate hover:border-line'
    }`

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 bg-white shadow-[0_1px_0_var(--color-line)]">
      <div className="bg-slate-deep text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5 text-[0.9rem]">
          <span className="hidden md:inline">{company.certified}</span>
          <span className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>
              Helpline{' '}
              <a className="font-semibold text-brand hover:underline" href={company.helplineHref}>
                {company.helpline}
              </a>
            </span>
            <a className="hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </span>
        </div>
      </div>

      <div className="wrap flex items-center justify-between gap-4 py-2.5">
        <Link to="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3" aria-label="Kothari Industries home">
          <img src={img('logo-mark.png')} alt="" width="315" height="320" className="h-12 w-auto md:h-14" />
          <img
            src={img('logo-wordmark.png')}
            alt="Kothari Industries, Manilal & Brothers Group"
            width="720"
            height="268"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink to={n.to} end={n.to === '/'} className={linkClass}>
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center border-2 border-slate lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2.5" fill="none" />
            ) : (
              <path d="M2 5h18M2 11h18M2 17h18" stroke="currentColor" strokeWidth="2.5" fill="none" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-white lg:hidden">
          <ul className="wrap flex flex-col py-2">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `display block border-l-4 py-2 pl-3 text-2xl font-medium ${
                      isActive ? 'border-brand text-slate-deep' : 'border-transparent text-slate'
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
