const initialState = {
	items: [
		{
			item: 'visit great barrier reef',
			id: Date.now(),
			completed: false,
		},
	],
	input: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				items: [
					...state.items,
					{
						item: action.payload,
						id: Date.now(),
						completed: false,
					},
				],
			};

		case 'NEW_ITEM_TEXT':
			return { ...state, input: action.payload };

		case 'TOGGLE_COMPLETE':
			return {
				...state,
				items: state.items.map((item) => {
					if (item.id !== action.payload) {
						return item;
					}
					return {
						...item,
						completed: !item.completed,
					};
				}),
			};

		case 'CLEAR_COMPLETED':
			return {
				...state,
				list: state.list.filter((item) => {
					if (!item.completed) {
						return item;
					}
				}),
			};

		default:
			return state;
	}
};

export { initialState, reducer };
