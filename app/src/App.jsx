import { useState } from 'react'
import './App.css'
import * as Components from './components';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='header sticky top-0 z-40 opacity-95' >
      <Components.Header/>
    </div>
    <div>
      <Components.Intro/>
    </div>
    <div>
      <Components.Projects/>
    </div>
    <div>
      <Components.Skills />
    </div>
    </>
  )
}

export default App
