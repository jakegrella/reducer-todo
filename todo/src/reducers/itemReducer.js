import { SET_ITEM, SET_ID, SET_COMPLETED } from '../actions/itemActions';

const reducer = (state, action) => {
	switch (action.type) {
		case SET_ITEM:
			return { ...state, item: action.payload };
		case SET_ID:
			return { ...state, id: action.payload };
		case SET_COMPLETED:
			return { ...state, completed: action.payload };
		default:
			return state;
	}
};

export default reducer;
