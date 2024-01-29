import MenusTable from '../componentes/menusTable/MenusTable'
import ModalPedido from '../componentes/modal/ModalPedido'
import Selectores from '../componentes/selectores/Selectores'
import Spinner from '../componentes/spinner/Spinner'
import useComidas from '../hooks/useComidas'
import '../style/home.css'

const Home = () => {

  const {menus, cargando} = useComidas()
  return (
    <>
      <div className='home-continer-selectores'>
        <Selectores/>
      </div>
      {
          menus?.length > 1 ? (
            cargando ? 
            <Spinner/>
            :
            (
              <div className='home-container-menus'>
                <div className='table-container'>
                <MenusTable/>
                </div>
                <ModalPedido/>
              </div>
            )
          )
          :
          null
        }
    </>
  )
}

export default Home
