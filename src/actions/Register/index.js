import * as types from '../../constants/ActionTypes.js'

export function setName(data) {
	return {
		type: types.SET_NAME,
		data: data
	}
}