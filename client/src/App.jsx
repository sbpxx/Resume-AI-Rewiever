import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { Accueil } from './Accueil'
import { Problem } from './Problem'
import { Intersection } from './Intersection'
import { Solution } from './Solution'
import { Essai } from './Essai'
import { Tarifs } from './Tarifs'
import { Avis } from './Avis'
import { Newsletter } from './Newsletter'
import { Footer } from './Footer'

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
    <Essai></Essai>
    <Intersection></Intersection>
    <Tarifs></Tarifs>
    <Intersection></Intersection>
    <Avis></Avis>
    <Intersection></Intersection>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </>
  )
}

export default App
