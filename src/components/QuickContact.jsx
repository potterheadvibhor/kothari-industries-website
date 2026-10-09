import { company } from '../data/site.js'

const waLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.04 3C9.08 3 3.43 8.64 3.43 15.6c0 2.22.58 4.39 1.69 6.3L3.33 28.5l6.77-1.77a12.56 12.56 0 0 0 5.94 1.5h.01c6.95 0 12.6-5.64 12.6-12.6 0-3.37-1.31-6.53-3.69-8.91A12.5 12.5 0 0 0 16.04 3Zm0 23.1h-.01a10.45 10.45 0 0 1-5.33-1.46l-.38-.23-4.02 1.05 1.07-3.92-.25-.4a10.43 10.43 0 0 1-1.6-5.55c0-5.78 4.71-10.48 10.5-10.48 2.8 0 5.43 1.09 7.41 3.07a10.42 10.42 0 0 1 3.07 7.42c0 5.79-4.71 10.5-10.46 10.5Zm5.75-7.85c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.68.08-.32-.16-1.33-.49-2.54-1.57a9.5 9.5 0 0 1-1.76-2.18c-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.18.21-.32.32-.52.1-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.4-.29.31-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.75.24 1.44.21 1.98.13.6-.09 1.87-.77 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.37Z"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.28-.28.68-.36 1.02-.25 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L6.6 10.8Z"
      />
    </svg>
  )
}

// Floating call and WhatsApp buttons, shown on every page.
export default function QuickContact() {
  const base =
    'group flex items-center justify-end rounded-full shadow-[0_6px_18px_rgb(0_0_0/0.28)] transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5'
  // The label slides open on hover or keyboard focus (desktop only)
  const label =
    'pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap text-[0.95rem] font-semibold opacity-0 transition-all duration-300 group-hover:max-w-60 group-hover:pl-5 group-hover:opacity-100 group-focus-visible:max-w-60 group-focus-visible:pl-5 group-focus-visible:opacity-100 md:block'
  return (
    <div
      className="fixed right-4 z-50 flex flex-col items-end gap-3 md:right-6"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <a
        href={company.helplineHref}
        className={`${base} bg-brand text-slate-deep`}
        aria-label={`Call ${company.helpline}`}
      >
        <span className={label}>Call {company.helpline}</span>
        <span className="grid size-14 place-items-center">
          <PhoneIcon />
        </span>
      </a>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className={`${base} wa-pulse bg-[#25d366] text-white`}
        aria-label="Chat with us on WhatsApp"
      >
        <span className={label}>Chat on WhatsApp</span>
        <span className="grid size-14 place-items-center">
          <WhatsAppIcon />
        </span>
      </a>
    </div>
  )
}
