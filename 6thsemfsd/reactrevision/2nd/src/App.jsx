 //create a functional react component named greeting that accepts messge as props and renders a greeting meessage using jsx

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/greeting'

function App() {
  

  return (
    <>
    <Greeting message="Good Morning Hardik" />
     
    </>
  )
}

export default App




