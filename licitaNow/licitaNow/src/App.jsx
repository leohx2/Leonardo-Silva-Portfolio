import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import Carousel from './components/Carousel/Carousel'
import TiposDeConcurso from './components/TiposDeConcurso'

function App() {

  return (
    <>
      <NavBar/>
      <Carousel/>
      <TiposDeConcurso/>
    </>
  )
}

export default App
