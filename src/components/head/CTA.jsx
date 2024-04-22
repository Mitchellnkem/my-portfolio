/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import MA from '../../assets/MA.pdf' 

const CTA = () => {
  return (
	<div className='cta'>
	<a href={MA} download className='btn'>Download Cv</a>
	<a href="#contact" className='btn btn-primary'>Let's Talk</a>
	
	</div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA
