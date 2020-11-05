export const ADD_ITEM = 'ADD_ITEM';
export const NEW_ITEM_TEXT = 'NEW_ITEM_TEXT';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addItem = (item) => {
	return { type: ADD_ITEM, payload: item };
};

export const newItemText = (text) => {
	return { type: NEW_ITEM_TEXT, payload: text };
};

export const toggleComplete = (itemId) => {
	return { type: TOGGLE_COMPLETE, payload: itemId };
};

export const clearCompleted = () => {
	return { type: CLEAR_COMPLETED };
};
