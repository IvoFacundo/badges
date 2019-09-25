import React from 'react'
import Gravatar from 'react-gravatar'

import './styles/Badge.css'
import logo from '../images/badge-header.svg'

export default class Badge extends React.Component {
	render() {
		const { firstName, lastName, jobTitle, twitter } = this.props
		return (
			<div className='Badge'>
				<div className='Badge__header'>
					<img src={logo} alt='Logo' />
				</div>

				<div className='Badge__section-name'>
					<Gravatar
						className='Badge__avatar'
						email={this.props.email}
						size={150}
					/>
					<h1>
						{firstName} <br /> {lastName}
					</h1>
				</div>

				<div className='Badge__section-info'>
					<h3>{jobTitle}</h3>
					<div>@{twitter}</div>
				</div>

				<div className='Badge__footer'>#ahre</div>
			</div>
		)
	}
}
