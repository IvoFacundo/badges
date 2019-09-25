import React from 'react'

import Modal from './Modal'

export default function DeleteBadgeModal(props) {
	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<div className="DeleteBadgeModal">
				<h1>seguro?</h1>
				<p>seguritoooo</p>
				<div>
					<button
						onClick={props.onDeleteBadge}
						className="btn btn-danger mr-4"
					>
						Delete
					</button>
					<button onClick={props.onClose} className="btn btn-primary">
						Cancel
					</button>
				</div>
			</div>
		</Modal>
	)
}
