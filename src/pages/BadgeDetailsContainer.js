import React from 'react'

import Loading from '../components/Loading'
import Error from '../components/Error'
import BadgeDetails from './BadgeDetails.js'
import api from '../api'

export default class BadgeDetailsContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			error: null,
			data: undefined,
			isModalOpen: false
		}
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null })
		try {
			const response = await api.badges.read(this.props.match.params.badgeId)
			this.setState({ loading: false, data: response })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	handleOpenModal = () => {
		this.setState({
			isModalOpen: true
		})
	}

	handleCloseModal = () => {
		this.setState({
			isModalOpen: false
		})
	}

	handleDeleteBadge = async () => {
		this.setState({ loading: true, error: null })
		try {
			await api.badges.remove(this.props.match.params.badgeId)
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

		if (this.state.error) {
			return <Error error={this.state.error} />
		}

		return (
			<BadgeDetails
				onOpenModal={this.handleOpenModal}
				onCloseModal={this.handleCloseModal}
				onDeleteBadge={this.handleDeleteBadge}
				isModalOpen={this.state.isModalOpen}
				badge={this.state.data}
			/>
		)
	}
}
