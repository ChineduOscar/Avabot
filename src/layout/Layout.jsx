import Navbar from "../components/common/Navbar"
const Layout = ({ children }) => {
  return (
    <main className="relative w-full overflow-hidden">
      <Navbar/>
      {children}
    </main>
  )
}

export default Layout
