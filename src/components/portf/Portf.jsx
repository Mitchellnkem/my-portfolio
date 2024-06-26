/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import './portf.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'




const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Crypto currency Dashbord & Financial Visualization',
		github: 'https://github.com',
		demo: 'https//dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',

	},
	{
		id: 2,
		image: IMG2,
		title: 'Charts templates & infographics in Figma',
		github: 'https://github.com',
		demo: 'https//dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma',

	},
	{
		id: 3,
		image: IMG3,
		title: 'Figma dashboard Ui kit for data design web app',
		github: 'https://github.com',
		demo: 'https//dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',

	},
	{
		id: 4,
		image: IMG4,
		title: 'Maintaining tasks and tracking progress',
		github: 'https://github.com',
		demo: 'https//dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress',

	},
	{
		id: 5,
		image: IMG5,
		title: 'Charts template & infografics in Figma',
		github: 'https://github.com',
		demo: 'https//dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma',

	},
	{
		id: 6,
		image: IMG6,
		title: 'Charts templates & infographics',
		github: 'https://github.com',
		demo: 'https//dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma',

	},

]

const portfolio = () => {
  return (
	<section id='portfolio'>
	<h5>My Recent Work</h5>
	<h2>Portfolio</h2>

	<div className="container portfolio__container">

		{
			data.map(({id, image, title, github, demo}) => {
				return (
			<article key={id} className="portfolio__item">
				<div className="portfolio__item-image">
					<img src={image} alt={title} />
				</div>
					<h3>{title}</h3>
					<div className="portfolio__item-cta">
					<a href={github} className='btn' target='_blank'>Github</a>
					<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
					</div>
			</article>

				)
			})
		}


		{/* <article className="portfolio__item">
			<div className="portfolio__item-image">
				<img src={IMG1} alt="" />
			</div>
				<h3>This is a portfolio item</h3>
				<div className="portfolio__item-cta">
				<a href="https://github.com" className='btn' target='_blank'>Github</a>
				<a href="https://dribble.com." className='btn btn-primary' target='_blank'>Live DEmo</a>
				</div>
		</article> */}

		{/* <article className="portfolio__item">
			<div className="portfolio__item-image">
				<img src={IMG2} alt="" />
			</div>
				<h3>This is a portfolio item</h3>
				<div className="portfolio__item-cta">
				<a href="https://github.com" className='btn' target='_blank'>Github</a>
				<a href="https://dribble.com." className='btn btn-primary' target='_blank'>Live DEmo</a>
				</div>
		</article>

		<article className="portfolio__item">
			<div className="portfolio__item-image">
				<img src={IMG3} alt="" />
			</div>
				<h3>This is a portfolio item</h3>
				<div className="portfolio__item-cta">
				<a href="https://github.com" className='btn' target='_blank'>Github</a>
				<a href="https://dribble.com." className='btn btn-primary' target='_blank'>Live DEmo</a>
				</div>
		</article>

		<article className="portfolio__item">
			<div className="portfolio__item-image">
				<img src={IMG4} alt="" />
			</div>
				<h3>This is a portfolio item</h3>
				<div className="portfolio__item-cta">
				<a href="https://github.com" className='btn' target='_blank'>Github</a>
				<a href="https://dribble.com." className='btn btn-primary' target='_blank'>Live DEmo</a>
				</div>
		</article>

		<article className="portfolio__item">
			<div className="portfolio__item-image">
				<img src={IMG5} alt="" />
			</div>
				<h3>This is a portfolio item</h3>
				<div className="portfolio__item-cta">
				<a href="https://github.com" className='btn' target='_blank'>Github</a>
				<a href="https://dribble.com." className='btn btn-primary' target='_blank'>Live DEmo</a>
				</div>
		</article>

		<article className="portfolio__item">
			<div className="portfolio__item-image">
				<img src={IMG6} alt="" />
			</div>
				<h3>This is a portfolio item</h3>
				<div className="portfolio__item-cta">
				<a href="https://github.com" className='btn' target='_blank'>Github</a>
				<a href="https://dribble.com." className='btn btn-primary' target='_blank'>Live DEmo</a>
				</div>
		</article> */}
	</div>

	</section>
  )
}

export default portfolio
