import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import App from './components/App'

const container = document.getElementById('app')
// 			(que renderizar, donde renderizar)
ReactDOM.render(<App />, container)
