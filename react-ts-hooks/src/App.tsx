import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UseEffectComponent from './components/UseEffectComponent.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UseEffectComponent />
    </div>
  )
}

export default App
