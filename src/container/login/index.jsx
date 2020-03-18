import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as loginAction from '../../actions/Login'

import { Button } from 'element-react/next';

class LoginApp extends React.Component {
	componentWillMount() {
		const { actions } = this.props;
		setTimeout(() => {
			actions.setMsg({message: 'Succ~'});
		}, 300);
	}
	
	render() {
		let isShow = true
		const bEle = (function() {
			if(isShow) {
				return <b>owner</b>
			} else {
				return <b>other</b>
			}
		})()
		const spanEle = <span>{bEle}</span>
		const pEle = <p>这是内容{spanEle}</p>
		
		return (
			<div>
				<h2>登录页 {this.props.message}</h2>
				<Button type="primary">Hello</Button>
				{this.props.message && 
					<span>{spanEle}</span>}
				{pEle}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		message: state.login.message
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(loginAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);