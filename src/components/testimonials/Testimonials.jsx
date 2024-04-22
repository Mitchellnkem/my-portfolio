/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const data = [
	{
		avatar: AVTR1,
		name: 'Mabel Amegbo Kekeli',
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis mollitia cupiditate praesentium sequi fugiat earum quidem sapiente inventore. Quibusdam laborum consequuntur voluptatibus quos cumque? Amet laborum id ut quibusdam ex?'
	},
	{
		avatar: AVTR2,
		name: 'Ash Token',
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis mollitia cupiditate praesentium sequi fugiat earum quidem sapiente inventore. Quibusdam laborum consequuntur voluptatibus quos cumque? Amet laborum id ut quibusdam ex?'
	},
	{
		avatar: AVTR3,
		name: 'Ryzen Amd',
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis mollitia cupiditate praesentium sequi fugiat earum quidem sapiente inventore. Quibusdam laborum consequuntur voluptatibus quos cumque? Amet laborum id ut quibusdam ex?'
	},
	{
		avatar: AVTR4,
		name: 'Theo Grat',
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis mollitia cupiditate praesentium sequi fugiat earum quidem sapiente inventore. Quibusdam laborum consequuntur voluptatibus quos cumque? Amet laborum id ut quibusdam ex?'
	},
	
]


const Testimonials = () => {
  return (
	<section id='testimonials'>
	<h5>Review from clients</h5>
	<h2>Testimonials</h2>



	<Swiper className="container tesitmonials__container">
	<Swiper pagination={true} modules={[Pagination]} className="mySwiper"></Swiper>
		{
			data.map(({Avatar, name, review}, index) =>{
				return(
					<SwiperSlide key={index} className="tesitmonial">
						<div className="client__avatar">
							<img src={Avatar} />
						</div>
						<h5 className='client__name'>{name}</h5>
						<small className='client__review'>{review}</small>
					</SwiperSlide>
				)
			})
		}
	</Swiper>
	</section>

  )
}

export default Testimonials
