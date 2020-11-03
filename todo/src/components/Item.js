import { useReducer } from 'react';
import reducer from '../reducers/itemReducer';

export default function Item() {
	const initialState = {
		item: 'call dad',
		id: Date.now(),
		completed: false,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h2>{state.item}</h2>
		</div>
	);
}
