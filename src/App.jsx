import { useState } from 'react'
import Canvas from './components/Canvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      <Canvas width={700} height={500} />
     </div>
    </>
  )
}

export default App
