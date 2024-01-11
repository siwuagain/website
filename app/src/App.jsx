import { useState } from 'react'
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
    <div>
      <Components.Projects/>
    </div>
    </>
  )
}

export default App
