import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Pedidos from './paginas/Pedidos'
import { ComidasProvider } from './context/ComidasProvider'
import Layout from './layouts/Layout'


function App() {

  return (
    <BrowserRouter>
      <ComidasProvider>
        <Routes>
          <Route path='' element={<Layout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/pedidos' element={<Pedidos/>}/>
          </Route>
        </Routes>
      </ComidasProvider>
    </BrowserRouter>
  )
}

export default App
