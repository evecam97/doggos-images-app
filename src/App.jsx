import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddImage } from './components/addImage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Click to get a doggo</h1>
      <AddImage/>
    </>
  )
}

export default App
