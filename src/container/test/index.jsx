import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as testAction from '../../actions/Test'
import * as registerAction from '../../actions/Register'

import { Button } from 'element-react/next';

import { Link } from 'react-router-dom'

const spanEle = (<span>这是文本内容</span>)
const pEle = (<p>p 标签的内容 {spanEle}</p>)

class TestApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
		
		// this.testMsg = this.testMsg.bind(this)
		this.toggleMsg = this.toggleMsg.bind(this)
	}
	
	componentWillMount() {
		const { actions } = this.props;
		setTimeout(() => {
			actions.testInfo({info: '来自测试页的信息〜'});
			actions.setName({name: '在 Test 页面修改 Name'})
		}, 300);
	}	

	// testMsg() {
	// 	if(this.state.show) {
	// 		return <span>显示信息</span>
	// 	} else {
	// 		return <span>隐藏信息</span>
	// 	}
	// }
	
	toggleMsg() {
		this.setState({
			show: !this.state.show
		})
	}

	render() {
		let testMsg = (() => {
			if(this.state.show) {
				return <span>显示信息</span>
			} else {
				return <span>隐藏信息</span>
			}			
		})()
		
		return (
			<div>
				<h2>测试页面  {this.props.pageInfo}</h2>
				<p>
					<Link to="/Register">注册页</Link>
				</p>
				{pEle}
				<p>{testMsg}</p>
				<Button 
					type="primary"
					onClick={this.toggleMsg}>
					{this.state.show ? '点我隐藏信息' : '点我显示信息'}
				</Button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		pageInfo: state.test.info
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({...testAction, ...registerAction}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TestApp);