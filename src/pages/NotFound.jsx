import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function NotFound() {
  return (
    <>
      <PageHeader lines={['Page not found.']}>
        This page does not exist or has moved.
      </PageHeader>
      <div className="wrap flex flex-wrap gap-4 py-12">
        <Link to="/" className="btn btn-primary">
          Go to the home page
        </Link>
        <Link to="/products" className="btn btn-outline">
          See the product range
        </Link>
      </div>
    </>
  )
}
