import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, {lazy, Suspense} from 'react'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<h1>Probando</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
