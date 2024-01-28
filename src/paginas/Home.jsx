import HomerBanner from '../componentes/homeBanner/HomerBanner'
import MenusTable from '../componentes/menusTable/MenusTable'
import ModalPedido from '../componentes/modal/ModalPedido'
import Selectores from '../componentes/selectores/Selectores'
import useComidas from '../hooks/useComidas'
import '../style/home.css'

const Home = () => {

  const {menus} = useComidas()

  return (
    <>
      <div className='home-continer-selectores'>
        <Selectores/>
      </div>
      <div className='home-container-menus'>
        {
          menus?.length > 1 ? (
            <>
              <MenusTable/>
              <ModalPedido/>
            </>
          )
          :
          null
        }
      </div>
    </>
  )
}

export default Home
