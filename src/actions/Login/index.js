import * as types from '../../constants/ActionTypes.js'

export function setMsg(data) {
	return {
		type: types.SET_MSG,
		data: data
	}
}