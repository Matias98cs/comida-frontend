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
        <MenusTable/>
      </div>
      {/* {
        menus ? (
          <div className='home-container-menus'>
            <Menus/>
          </div>
        )
        :
        null
      } */}
      
    </div>
  )
}

export default Home
