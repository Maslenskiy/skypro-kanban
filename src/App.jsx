
import { useEffect, useState } from 'react'
import './App.css'
import Wrapper from './components/Wrapper/Wrapper'
import IsLoading from './components/Wrapper/IsLoading/IsLoading'

function App() {
const [isLoading, setIsLoading] = useState(true)


useEffect(()=>{
  const timer = setInterval(()=>{
    setIsLoading(false)
  },2000)

  return ()=> clearTimeout(timer)
},[])

if(isLoading){
  return (
    <IsLoading />
  )
}

  return (
    <Wrapper />
  )
}

export default App
