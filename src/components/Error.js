import React from 'react'

import './styles/Error.css'

export default function Error(props) {
	return (
		<div className='Error'>
			<h3>Error: {props.error.message} 😱</h3>
		</div>
	)
}
