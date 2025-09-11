import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Approuter from './router/Approuter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Approuter/>
      </div>
        
    </>
  )
}

export default App
