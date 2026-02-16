import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold text-red-500">It works</h1>

      <button className="px-6 py-3 rounded-xl bg-black text-white hover:bg-neutral-800">
  Hello portfolio
</button>
    </>
  )
}

export default App
