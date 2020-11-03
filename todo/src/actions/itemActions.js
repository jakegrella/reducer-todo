export const SET_ITEM = 'SET_ITEM';
export const SET_ID = 'SET_ID';
export const SET_COMPLETED = 'SET_COMPLETED';

export const setItem = (item) => {
	return { type: SET_ITEM, payload: item };
};

export const setId = (id) => {
	return { type: SET_ID, payload: id };
};

export const setCompleted = (completed) => {
	return { type: SET_COMPLETED, payload: completed };
};
