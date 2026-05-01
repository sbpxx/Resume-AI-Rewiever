import { useState } from 'react'
import './App.css'
import {Navbar} from './Navbar'

function App() {
  const [isLogged,setIsLogged] = useState(false)

  return (
    <>    
    <Navbar isLogged={isLogged}></Navbar>
    </>
  )
}

export default App
