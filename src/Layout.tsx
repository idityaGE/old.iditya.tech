import { Outlet } from "react-router-dom";

const Layout = () => {
  document.title = "Portfolio"
  return (
    <>
      <div className="container max-w-4xl mx-auto min-h-screen flex flex-col px-4 pt-5">
        <img src="/gradient.webp" alt="Gradient IMG" className="absolute left-0 sm:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover" />
        <Outlet />
      </div>
    </>
  )
}

export default Layout