import React from 'react'
import './Header.css'
import CTA from './CTA'
import ja from '../../assets/ja.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Jakub Gołębiewski</h1>
        <h5 className='text-light'>Junior Fullstack Dev</h5>
        <CTA/>
        <HeaderSocials/>
          <div className='me'>
          <img src={ja} alt="me"/>
          </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header