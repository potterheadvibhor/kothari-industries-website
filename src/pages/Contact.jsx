import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { company, locations } from '../data/site.js'

const mapUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

const fieldClass =
  'mt-1 block w-full border-2 border-line bg-white px-3 py-2.5 text-slate placeholder:text-slate-soft/70 focus:border-slate focus:outline-none'

function Field({ id, label, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="font-medium text-slate">
        {label}
        {optional && <span className="font-normal text-slate-soft"> (optional)</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [params] = useSearchParams()
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: params.get('product') ?? '',
    message: '',
  })
  const [draft, setDraft] = useState(null)
  const [copied, setCopied] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  // This is a static site with no server, so the form writes the enquiry
  // as an email and hands it to the visitor's own mail app.
  // To post to a form service instead (Formspree, Web3Forms...), replace
  // the body of this function with a fetch() to that service.
  function handleSubmit(e) {
    e.preventDefault()
    const subject = `Enquiry${form.product ? `: ${form.product}` : ''} from ${form.name}`
    const details = [
      `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.product && `Product: ${form.product}`,
    ].filter(Boolean)
    const body = [...details, '', form.message].join('\n')

    setDraft({ subject, body })
    setCopied(false)
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(`${draft.subject}\n\n${draft.body}`)
      setCopied(true)
    } catch {
      // Clipboard blocked: select the text so it can be copied by hand
      const node = document.getElementById('enquiry-draft')
      const range = document.createRange()
      range.selectNodeContents(node)
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }

  return (
    <>
      <PageHeader lines={['Contact us.']}>
        Tell us what you need and where it is going. We will come back with availability and a
        quotation.
      </PageHeader>

      <div className="wrap grid gap-14 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        {/* Details */}
        <div className="flex flex-col gap-10">
          <section aria-labelledby="reach-h">
            <h2 id="reach-h" className="display text-4xl text-slate">
              Call or write
            </h2>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3">
              <dt className="font-medium text-slate">Helpline</dt>
              <dd>
                <a
                  href={company.helplineHref}
                  className="text-xl font-semibold tabular-nums text-brand-dark hover:underline"
                >
                  {company.helpline}
                </a>
              </dd>
              <dt className="font-medium text-slate">Phone</dt>
              <dd className="tabular-nums text-slate-soft">
                {company.phones.map((p) => (
                  <span key={p} className="block">
                    {p}
                  </span>
                ))}
              </dd>
              <dt className="font-medium text-slate">Email</dt>
              <dd>
                <a
                  href={`mailto:${company.email}`}
                  className="break-all text-brand-dark underline decoration-1 underline-offset-4"
                >
                  {company.email}
                </a>
              </dd>
            </dl>
          </section>

          <section aria-labelledby="where-h">
            <h2 id="where-h" className="display text-4xl text-slate">
              Where to find us
            </h2>
            <ul className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {locations.map((l) => (
                <li key={l.label} className="border-l-4 border-brand pl-4">
                  <h3 className="font-semibold text-slate">{l.label}</h3>
                  <address className="not-italic text-slate-soft">
                    {l.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  {l.map && (
                    <a
                      href={mapUrl(l.map)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-[0.95rem] font-medium text-brand-dark underline decoration-1 underline-offset-4"
                    >
                      Open in Google Maps
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Enquiry form */}
        <section aria-labelledby="form-h" className="bg-paper p-6 md:p-9">
          <h2 id="form-h" className="display text-4xl text-slate">
            Send an enquiry
          </h2>
          <p className="mt-1 text-slate-soft">
            This writes an email to {company.email} in your own mail app, ready for you to send.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field id="enq-name" label="Your name">
              <input id="enq-name" required autoComplete="name" className={fieldClass} value={form.name} onChange={set('name')} />
            </Field>
            <Field id="enq-company" label="Company" optional>
              <input id="enq-company" autoComplete="organization" className={fieldClass} value={form.company} onChange={set('company')} />
            </Field>
            <Field id="enq-phone" label="Phone number">
              <input id="enq-phone" type="tel" required autoComplete="tel" className={fieldClass} value={form.phone} onChange={set('phone')} />
            </Field>
            <Field id="enq-email" label="Email" optional>
              <input id="enq-email" type="email" autoComplete="email" className={fieldClass} value={form.email} onChange={set('email')} />
            </Field>
            <div className="sm:col-span-2">
              <Field id="enq-product" label="Product" optional>
                <input
                  id="enq-product"
                  className={fieldClass}
                  placeholder="For example: Foundation bolts"
                  value={form.product}
                  onChange={set('product')}
                />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field id="enq-message" label="What do you need?">
                <textarea
                  id="enq-message"
                  required
                  rows={5}
                  className={fieldClass}
                  placeholder="Sizes, grades, quantities and delivery location"
                  value={form.message}
                  onChange={set('message')}
                />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-primary">
                Write the email
              </button>
            </div>
          </form>

          {draft && (
            <div role="status" className="mt-8 border-l-4 border-slate bg-white p-5">
              <p className="font-medium text-slate">
                Your mail app should now be open with this enquiry. If nothing opened, copy the text
                and send it to {company.email}.
              </p>
              <pre
                id="enquiry-draft"
                className="mt-3 max-h-56 overflow-auto whitespace-pre-wrap break-words border border-line p-3 font-sans text-[0.95rem] text-slate-soft"
              >
                {`${draft.subject}\n\n${draft.body}`}
              </pre>
              <button type="button" onClick={copyDraft} className="btn btn-outline mt-4">
                {copied ? 'Copied' : 'Copy the enquiry'}
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
