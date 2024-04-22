/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const contact = () => {
  return (
	<section id='contact'>
	<h5>Get In Touch</h5>
	<h2>Contact</h2>


	<div className="container contact__container">
		<div className="contact__options">
		<article className='contact__option'>
			<MdOutlineEmail className='contact__option-icon'/>
			<h4>Email</h4>
			<h5>shantelkokar.com</h5>
			<a href="mailto:shantelkokar@gmail" target='_blank'>Send a message</a>
		</article>

		<article className='contact__option'>
			<RiMessengerLine className='contact__option-icon' />
			<h4>Messengaer</h4>
			<h5>Ghost</h5>
			<a href="#" target='_blank'>Send a message</a>
		</article>

		<article className='contact__option'>
			<BsWhatsapp className='contact__option-icon' />
			<h4>WhatsApp</h4>
			<h5>+123665578</h5>
			<a href="https://api.whatsapp.com/send?phone=+233558734329" target='_blank'>Send a message</a>
		</article>

		</div>
		{/* end of contact option */}


		<form action="">
			<input type="text" name='name' placeholder='Enter your full name' required />
			<input type="email" name='email' placeholder='Enter your email' required />
			<textarea name="message"  rows="7" placeholder='Enter your Meassage' required></textarea>
			<button type='submit' className='btn btn-primary'>Send your Message</button>

		</form>

	</div>
	</section>
  )
}

export default contact
