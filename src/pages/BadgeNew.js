import React from 'react'

import './styles/BadgeNew.css'
import logoHeader from '../images/platziconf-logo.svg'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import api from '../api'
import Loading from '../components/Loading'

export default class BadgeNew extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			error: null,
			form: {
				firstName: '',
				lastName: '',
				email: '',
				jobTitle: '',
				twitter: ''
			}
		}
	}

	handleChange = e => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		})
	}

	handleSubmit = async e => {
		e.preventDefault()
		this.setState({ loading: true, error: null })
		try {
			await api.badges.create(this.state.form)
			this.setState({ loading: false })
			this.props.history.push('/badges')
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		if (this.state.loading) {
			return <Loading />
		}
		return (
			<React.Fragment>
				<div className='BadgeNew__hero'>
					<img
						className='BadgeNew__hero-image img-fluid'
						src={logoHeader}
						alt='Logo'
					/>
				</div>

				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<Badge
								firstName={this.state.form.firstName || 'FIRST_NAME'}
								lastName={this.state.form.lastName || 'LAST_NAME'}
								email={this.state.form.email || 'EMAIL'}
								jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
								twitter={this.state.form.twitter || 'TWITTER'}
							/>
						</div>
						<div className='col-6'>
							<h1>Edit Attendant</h1>
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
								onSubmit={this.handleSubmit}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
