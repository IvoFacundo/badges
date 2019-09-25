import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'
import logo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

export default class Home extends React.Component {
	render() {
		return (
			<div className='Home'>
				<div className='container'>
					<div className='row'>
						<div className='Home__col col-12 col-md-4'>
							<img className='img-fluid mb-2' src={logo} alt='Platzi Logo' />

							<h1>Badge Management System</h1>
							<Link to='/badges' className='btn btn-primary'>
								Start
							</Link>
						</div>

						<div className='Home__col d-none d-md-block col-md-8'>
							<img
								className='img-fluid p-4'
								src={astronauts}
								alt='Astronautass'
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
