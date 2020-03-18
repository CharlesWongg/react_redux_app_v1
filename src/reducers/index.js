import { combineReducers } from 'redux';
import login from './Login';
import user from './Register'
import test from './Test'

const reducers = {
	login,
	user,
	test
};

export default combineReducers({
	...reducers
});