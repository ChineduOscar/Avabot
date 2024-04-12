import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Subscription from '../components/common/Subscription'
import ToTop from '../components/common/ToTop'
import TopHeader from '../components/common/TopHeader'

const Layout = ({ children }) => {
  return (
    <main className="relative w-full overflow-hidden">
      <TopHeader /> 
      <div>
        <Header />
      </div>
      {children}
      <Subscription />
      <Footer />
      <div className='fixed right-1 bottom-[5%]'>
        <ToTop />
      </div>
    </main>
  )
}

export default Layout
