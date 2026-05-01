import { useState } from 'react'
import './App.css'
import {Navbar} from './Navbar'
import { Accueil } from './Accueil'

function App() {
  const [isLogged,setIsLogged] = useState(false)

  return (
    <>    
    <Navbar isLogged={isLogged}></Navbar>
    <Accueil></Accueil>
    </>
  )
}

export default App
