/* eslint-disable no-unused-vars */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Headsocials = () => {
  return (
	<div className='header__socials'>
		<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="header__socials-icon"><BsLinkedin /></a>
		<a href="https://www.github.com" target="_blank" rel="noreferrer" className="header__socials-icon"><FaGithub/></a>
		<a href="https://www.dribbble.com" target="_blank" rel="noreferrer" className="header__socials-icon"><FiDribbble/></a>
	</div>
  )
}

export default Headsocials
