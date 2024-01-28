import HomerBanner from '../componentes/homeBanner/HomerBanner'
import MenusTable from '../componentes/menusTable/MenusTable'
import Selectores from '../componentes/selectores/Selectores'
import useComidas from '../hooks/useComidas'
import '../style/home.css'

const Home = () => {

  const {menus} = useComidas()

  return (
    <div className='home'>
      <div className='home-container-banner'>
        <HomerBanner/>
      </div>
      <div className='home-continer-selectores'>
        <Selectores/>
      </div>
      <div className='home-container-menus'>
        {
          menus?.length > 1 ? (
            <MenusTable/>
          )
          :
          null
        }
      </div>
    </div>
  )
}

export default Home
