import { img } from '../data/site.js'
import Heading from './Heading.jsx'

// Top band of every inner page. With `image`, the band sits over a dark photo.
export default function PageHeader({ lines, image, children }) {
  if (!image) {
    return (
      <div className="border-b border-line bg-paper">
        <div className="wrap py-12 md:py-16">
          <Heading as="h1" lines={lines} className="text-[clamp(3rem,8vw,5.5rem)]" />
          {children && (
            <p data-reveal className="mt-4 max-w-2xl text-lg text-slate-soft" data-delay="300">
              {children}
            </p>
          )}
        </div>
      </div>
    )
  }
  return (
    <div className="relative isolate overflow-hidden bg-slate-deep">
      <img
        src={img(image)}
        alt=""
        className="kenburns absolute inset-0 -z-10 size-full object-cover opacity-45"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-deep via-slate-deep/70 to-transparent"
        aria-hidden="true"
      />
      <div className="wrap py-16 md:py-24">
        <Heading as="h1" lines={lines} onDark className="text-[clamp(3rem,8vw,5.5rem)]" />
        {children && (
          <p data-reveal data-delay="300" className="mt-4 max-w-2xl text-lg text-white/85">
            {children}
          </p>
        )}
      </div>
    </div>
  )
}
