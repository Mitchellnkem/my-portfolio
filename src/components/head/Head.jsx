/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './head.css'
import CTA from './CTA'
// import ME from '../../assets/me'
import ME from '../../assets/me.png'
import Headsocials from './Headsocials'

const header = () => {
  return (
	<header>
		<div className="container header__container">
			<h5>Hello I'm</h5>
			<h1>Mitchell Carrie</h1>
			<h5 className="text-light">Fullstack Developer</h5>
			<CTA />
			<Headsocials />


			<div className="me">
				<img src={ME} alt="me" />
			</div>


			<a href="#contact" className='scroll__down'>Scroll Down</a>
		</div>
	</header>
  )
}

export default header
