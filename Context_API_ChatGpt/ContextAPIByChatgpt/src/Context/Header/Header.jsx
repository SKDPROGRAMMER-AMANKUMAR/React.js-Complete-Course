import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../ContextApi';

function Header() {
    const theme = useContext(ThemeContext);
  return (
    <h1>The theme is {theme}</h1>
  )
}

export default Header
