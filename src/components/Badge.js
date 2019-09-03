import React from 'react'
import logo from '../images/badge-header.svg'

class Badge extends React.Component {
	render() {
		return (
			<div>
				<div>
					<img src={logo} alt="Logo" />
				</div>

				<div>
					<img src="" alt="Avatar"></img>
					<h1>Ivo <br/> Chayle</h1>
				</div>

				<div>
					<p>Frontend</p>
					<p>@fenidaz</p>
				</div>

				<div>
					#ahre
				</div>
			</div>
		)
	}
}

export default Badge