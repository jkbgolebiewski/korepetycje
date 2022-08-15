import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {GrGithub} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"><GrLinkedin/></a>
        <a href="https://github.com"><GrGithub/></a>
    </div>
  )
}

export default HeaderSocials