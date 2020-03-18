import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from '../container/login/index.jsx'
import Register from '../container/register/index.jsx'
import Test from '../container/test'

class routes extends React.Component{
	render() {
		return (
			<div>
				<Router>
					<Route exact path="/" component={Login}></Route>
					<Route path="/Login" component={Login}></Route>
					<Route path="/Register" component={Register}></Route>
					<Route path="/Test" component={Test}></Route>
				</Router>
			</div>
		)
	}
}

export default routes;