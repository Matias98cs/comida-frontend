import HomerBanner from "../componentes/homeBanner/HomerBanner"
import {Outlet} from 'react-router-dom'
// import Spinner from "../componentes/spinner/Spinner"
// import useComidas from "../hooks/useComidas"

const Layout = () => {

  // const {recargar} = useComidas()
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
