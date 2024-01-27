import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, {lazy, Suspense} from 'react'
import Home from './paginas/Home'
import Pedidos from './paginas/Pedidos'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pedidos' element={<Pedidos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
