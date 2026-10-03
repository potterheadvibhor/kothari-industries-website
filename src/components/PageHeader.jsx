import Heading from './Heading.jsx'

// Top band of every inner page
export default function PageHeader({ lines, children }) {
  return (
    <div className="border-b border-line bg-paper">
      <div className="wrap py-12 md:py-16">
        <Heading as="h1" lines={lines} className="text-[clamp(3rem,8vw,5.5rem)]" />
        {children && <p className="mt-4 max-w-2xl text-lg text-slate-soft">{children}</p>}
      </div>
    </div>
  )
}
