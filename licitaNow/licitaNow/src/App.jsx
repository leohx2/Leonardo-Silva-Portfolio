import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import Carousel from './components/Carousel/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Carousel/>
    </>
  )
}

export default App
