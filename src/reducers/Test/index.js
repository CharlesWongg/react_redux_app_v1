
const initialState = {
	info: 'info: test'
}

export default function testInfo (state = initialState, action) {
	switch(action.type) {
		case 'TEST_INFO':
			return {
				...state,
				info: action.data.info
			}
		default:
			return state;
	}
}