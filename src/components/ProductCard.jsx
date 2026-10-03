import { Link } from 'react-router-dom'
import { img } from '../data/site.js'

// The catalogue card: an orange name tab sitting on a framed photo.
export default function ProductCard({ name, image, enquiry }) {
  return (
    <li className="flex flex-col">
      <h3 className="tab self-start">{name}</h3>
      <div className="border border-brand bg-white shadow-[6px_6px_0_var(--color-paper)]">
        <img
          src={img(image)}
          alt={name}
          width="560"
          height="404"
          loading="lazy"
          className="aspect-[7/5] w-full object-cover"
        />
      </div>
      <Link
        to={`/contact?product=${encodeURIComponent(enquiry ?? name)}`}
        className="mt-3 self-start text-[0.95rem] font-medium text-brand-dark underline decoration-1 underline-offset-4 hover:text-slate-deep"
      >
        Enquire about this<span className="sr-only">: {name}</span>
      </Link>
    </li>
  )
}
