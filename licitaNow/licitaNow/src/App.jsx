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
      <div style={{height: "100dvh", width: "100%"}}>
        testar nav
      </div>
    </>
  )
}

export default App
