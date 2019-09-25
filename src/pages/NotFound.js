import React from 'react'
import { Link } from 'react-router-dom'

import './styles/NotFound.css'

export default function NotFound(props) {
	const path = props.location.pathname
	return (
		<div className='NotFound'>
			<div className='container'>
				<div className='row'>
					<div className='NotFound__col col-12'>
						<h2>
							No encontramos nada en la ruta "<strong>{path}</strong>"
						</h2>
						<Link to='/'>
							<h3>Ir a la pagina principal</h3>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
