import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import Carousel from './components/Carousel/Carousel'
import TiposDeConcurso from './components/TiposDeConcurso'
import Processos from './components/Processos'
import SobreLicitaNow from './components/SobreLicitaNow'

function App() {

  return (
    <>
      <NavBar/>
      <Carousel/>
      <TiposDeConcurso/>
      <Processos/>
      <SobreLicitaNow />
    </>
  )
}

export default App
