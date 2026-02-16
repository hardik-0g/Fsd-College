// create a react compoent named LoginSatus that renders different message based on wheather a user is logiened or not

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginStatus from './components/Loginstatus'
function App() {

  
  return (
    <>
      <LoginStatus isLoggedIn={true} />
    </>
  );
}


export default App;