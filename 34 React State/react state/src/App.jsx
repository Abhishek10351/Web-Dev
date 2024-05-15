import { useState } from 'react'
import './App.css'
import Toggler from "./Toggler"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Toggler/>
    </>
  )
}

export default App
