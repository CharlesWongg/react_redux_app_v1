import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as registerAction from '../../actions/Register'
import { Link } from 'react-router-dom'

class RegisterApp extends React.Component {
	componentWillMount() {
		const { actions } = this.props;
		setTimeout(() => {
			actions.setName({name: 'Ben'});
		}, 2000);
	}	
	
	render() {
		return (
			<div>
				<h2>注册页  {this.props.name}</h2>
				<Link to="/Test">Test 页面</Link>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		name: state.user.name
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(registerAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterApp);