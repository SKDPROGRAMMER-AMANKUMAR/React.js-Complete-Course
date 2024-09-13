import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Context/Header/Header'
import ThemeContext from './Context/ContextApi'

function App() {
  const theme = "Bluevoilet";
  
  return (
    <ThemeContext.Provider value={theme}>
      <Header />
    </ThemeContext.Provider>
  );
}


export default App
