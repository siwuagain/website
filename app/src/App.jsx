import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as Components from './components';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='header'>
      <Components.Header/>
      
    </div>
    <div>
      <Components.Intro/>
    </div>
    </>
  )
}

export default App
