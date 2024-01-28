import HomerBanner from "../componentes/homeBanner/HomerBanner"
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className="home">
        <div className='home-container-banner'>
            <HomerBanner/>
        </div>
      <Outlet/>
    </div>
  )
}

export default Layout
