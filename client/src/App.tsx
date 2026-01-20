import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div className="flex flex-col h-screen bg-sky-50">
    		<Header/>
	  		<MainContent/>
    	</div>
	</>
  )
} export default App
