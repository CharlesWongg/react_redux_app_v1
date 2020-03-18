
const initialState = {
	name: 'Alex'
}

export default function RegisterInfo (state = initialState, action) {
	switch(action.type) {
		case 'SET_NAME':
			// return Object.assign({}, state, {
			// 	message: action.data.message
			// })
			return {
				...state,
				name: action.data.name
			}
		default:
			return state;
	}
}