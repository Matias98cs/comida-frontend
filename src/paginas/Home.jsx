import HomerBanner from '../componentes/homeBanner/HomerBanner'
import Selectores from '../componentes/selectores/Selectores'
import '../style/home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container-banner'>
        <HomerBanner/>
      </div>
      <div className='home-continer-selectores'>
        <Selectores/>
      </div>
    </div>
  )
}

export default Home
