import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experience></Experience>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default App