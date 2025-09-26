import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserProfile />
     <h1>Hello World</h1>
    </>
  )
}

export default App
