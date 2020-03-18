
const initialState = {
	message: 'QWE'
}

export default function LoginInfo (state = initialState, action) {
	switch(action.type) {
		case 'SET_MSG':
			return Object.assign({}, state, {
				message: action.data.message
			})
			// return {
			// 	...state,
			// 	message: action.data.message
			// }
		default:
			return state;
	}
}