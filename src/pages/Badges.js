import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import logo from '../images/badge-header.svg'

import BadgesList from '../components/BadgesList'
import Loading from '../components/Loading'
import Error from '../components/Error'
import api from '../api'

export default class Badges extends React.Component {
	constructor(props) {
		super(props)
		console.log('1. Constructor')
		this.state = {
			loading: true,
			error: null,
			data: []
		}
	}

	componentWillMount() {
		console.log(' componentwill mount')
	}

	componentDidMount() {
		console.log('3. DidMount')
		this.fetchData()
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('5. componentDidUpdate()')
		console.log({ prevProps, prevState })

		console.log({ props: this.props, state: this.state })
	}

	componentWillUnmount() {
		console.log('6. componentWillUnmount')
		clearInterval(this.id)
	}

	fetchData = async () => {
		this.setState({
			loading: true,
			error: null
		})

		try {
			const data = await api.badges.list()
			this.setState({
				loading: false,
				data: data
			})
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			})
		}
	}

	render() {
		if (this.state.loading) {
			return <Loading />
		}

		if (this.state.error) {
			return <Error error={this.state.error} />
		}

		console.log('2/4. render()')
		return (
			<React.Fragment>
				<div className='Badges'>
					<div className='Badges__hero'>
						<div className='Badges__container'>
							<img className='Badges_conf-logo' src={logo} alt='Logo' />
						</div>
					</div>
				</div>

				<div className='Badges__container'>
					<div className='Badges__buttons'>
						<Link className='btn btn-primary' to='/badges/new'>
							New Badge
						</Link>
					</div>

					<div className='Badges__container'>
						<BadgesList badges={this.state.data} />
					</div>
				</div>
			</React.Fragment>
		)
	}
}
