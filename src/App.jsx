import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, {lazy, Suspense} from 'react'
import Home from './paginas/Home'
import Pedidos from './paginas/Pedidos'
import { ComidasProvider } from './context/ComidasProvider'



function App() {

  return (
    <BrowserRouter>
      <ComidasProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pedidos' element={<Pedidos/>}/>
        </Routes>
      </ComidasProvider>
    </BrowserRouter>
  )
}

export default App
