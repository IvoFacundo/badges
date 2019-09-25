import React from 'react'
import { Link } from 'react-router-dom'

import Gravatar from 'react-gravatar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import './styles/BadgesList.css'

class BadgeItem extends React.Component {
	render() {
		return (
			<div className='BadgesListItem'>
				<div className='media'>
					<Gravatar
						className='align-self-center mr-3 BadgesListItem__avatar'
						email={this.props.email}
						size={150}
					/>
					<div className='media-body'>
						<h5 className='mt-0'>
							{this.props.firstName} {this.props.lastName}
						</h5>
						<p>
							<span style={{ color: '#1da1f2' }}>
								<FontAwesomeIcon icon={faTwitter} /> @{this.props.twitter}
							</span>
						</p>
						<p className='mb-0'>
							{this.props.jobTitle} - {this.props.email}
						</p>
					</div>
				</div>
			</div>
		)
	}
}

const useSearchBadges = badges => {
	// inicializamos el estado de la query
	const [query, setQuery] = React.useState('')
	// inicializamos el estado de los badges
	const [filteredBadges, setFilteredBadges] = React.useState(badges)
	// usamos memo para recordar una busqueda antigua y hacer mas eficiente
	// el componente de busqueda
	React.useMemo(() => {
		// filtramos el objeto y nos quedamos solo con los badges que
		// que contengan un coincidencia con la query del componente de busqueda
		const result = badges.filter(badge => {
			// usamos string polarizado para juntar el nombre y el apellido y luego
			// normalizamos a minuscula tanto la query como los datos del usuario
			return `${badge.firstName} ${badge.lastName}`
				.toLowerCase()
				.includes(query.toLowerCase())
		})
		// seteamos el nuevo objeto de badges ya pasados por el filtro
		setFilteredBadges(result)
	}, [badges, query])

	return { query, setQuery, filteredBadges }
}

export default function BadgesList(props) {
	const badges = props.badges

	const { query, setQuery, filteredBadges } = useSearchBadges(badges)

	return (
		<div className='BadgesList'>
			<div className='form-group'>
				<label>Filter Badges</label>
				<input
					type='text'
					className='form-control'
					value={query}
					onChange={e => {
						setQuery(e.target.value)
					}}
				/>
			</div>

			{filteredBadges.length === 0 ? (
				<div>
					<h3>No badges were found</h3>
					<Link className='btn btn-primary' to='/badges/new'>
						Create new badge
					</Link>
				</div>
			) : (
				<ul className='list-unstyled'>
					{filteredBadges.map(badge => {
						return (
							<li key={badge.id}>
								<Link
									className='text-reset text-decoration-none'
									to={`/badges/${badge.id}`}
								>
									<BadgeItem {...badge} />
								</Link>
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}
