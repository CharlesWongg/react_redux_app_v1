import * as types from '../../constants/ActionTypes.js'

export function testInfo(data) {
	return {
		type: types.TEST_INFO,
		data: data
	}
}