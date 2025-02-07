import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2">Page not found</p>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-500 hover:text-blue-600"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default NotFound