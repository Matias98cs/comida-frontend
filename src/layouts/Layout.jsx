import HomerBanner from "../componentes/homeBanner/HomerBanner"
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className="main">
        <div className='main-container-banner'>
            <HomerBanner/>
        </div>
      <Outlet/>
    </div>
  )
}

export default Layout
