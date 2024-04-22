/* eslint-disable no-unused-vars */
import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
	<section id='services'>
		<h5>What I Offer</h5>
		<h2>Services</h2>

		<div className="container services__container">
			<article className="service">
				<div className="service__head">
					<h3>UI/UX Design</h3>
				</div>

				<ul className="service__list">
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
				</ul>
			</article>
			{/* end of Ui/Ux */}
			<article className="service">
				<div className="service__head">
					<h3>WEB DEVELOPMENT</h3>
				</div>

				<ul className="service__list">
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
				</ul>
			</article>
			{/* end of Web Development */}
			
			<article className="service">
				<div className="service__head">
					<h3>Content Creation</h3>
				</div>

				<ul className="service__list">
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
					<li>
						<BiCheck className='service__list-icons'/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia.</p>
					</li>
				</ul>
			</article>
			{/* end of Ui/Ux */}
		</div>
	</section>
  )
}

export default Services
