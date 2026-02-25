import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import Carousel from './components/Carousel/Carousel'
import TiposDeConcurso from './components/TiposDeConcurso'
import Processos from './components/Processos'
import SobreLicitaNow from './components/SobreLicitaNow'
import CallOut from './components/CallOut'
import JoinUs from './components/JoinUs'
import GoUp from './components/GoUp'
import Cookies from './components/Cookies'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <Carousel/>
      <TiposDeConcurso/>
      <Processos/>
      <SobreLicitaNow />
      <CallOut />
      <JoinUs/>
      <GoUp/>
      <Cookies />
      <Footer />
    </>
  )
}

export default App
