/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
	<section id='about'>
	<h5>Get To Know</h5>
	<h2>About Me</h2>


	<div className="container about__container">
		<div className="about__me">
			<div className="about__me-image">
			<img src={ME} alt="About Image" />
			</div>
		</div>
		<div className="about__content">
			<div className="about__cards">
				<article className='about__card'>
					<FaAward className='about__icon'/>
					<h5>Experience</h5>
					<small>3+ Years Working</small>
				</article>

				<article className='about__card'>
					<FiUsers className='about__icon'/>
					<h5>Client</h5>
					<small>200+ Worldwide</small>
				</article>

				<article className='about__card'>
					<VscFolderLibrary className='about__icon'/>
					<h5>Projects</h5>
					<small>75+ Complete</small>
				</article>
			</div>

			<p>	
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat dignissimos provident obcaecati itaque ducimus nam veritatis nesciunt eum, libero deleniti eligendi modi? Est sint nisi mollitia nihil, minus incidunt.
				
				
			</p>

			<a href="#contact" className='btn btn-primary' >Let's Talk</a>

		</div>
	</div>
	</section>
  )
}

export default About
