import React from 'react'
import './Nav.css'
import {MdHome} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {FaBookOpen} from 'react-icons/fa'
import {GrGithub} from 'react-icons/gr'
import {GrMail} from 'react-icons/gr'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('') 
  return (
    <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdHome></MdHome></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser></FaUser></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBookOpen></FaBookOpen></a>
    <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GrGithub></GrGithub></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrMail></GrMail></a>
    </nav>
  )
}

export default Nav