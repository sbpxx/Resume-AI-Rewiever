import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { Accueil } from './Accueil'
import { Problem } from './Problem'
import { Intersection } from './Intersection'
import { Solution } from './Solution'

function App() {
  const [isLogged,setIsLogged] = useState(false)

  return (
    <>    
    <Navbar isLogged={isLogged}></Navbar>
    <Accueil></Accueil>
    <Problem></Problem>
    <Intersection></Intersection>
    <Solution></Solution>
    <Intersection></Intersection>
    </>
  )
}

export default App
