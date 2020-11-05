import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/itemReducer';
import {
	addItem,
	newItemText,
	toggleComplete,
	clearCompleted,
} from '../actions/itemActions';

export default function ListItem() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const onChange = (e) => {
		dispatch(newItemText(e.target.value));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(addItem(state.input));
		dispatch(newItemText(''));
	};

	const clearItems = (e) => {
		e.preventDefault();
		dispatch(clearCompleted);
	};

	console.log('state', state);

	return (
		<div>
			<h1>BucketList</h1>
			{state.items.map((item) => {
				return (
					<p
						key={item.id}
						onClick={() => dispatch(toggleComplete(item.id))}
						className={`item${item.completed ? ' completed' : ''}`}
					>
						{item.item}
					</p>
				);
			})}
			<form onSubmit={onSubmit}>
				<input
					type='text'
					name='input'
					value={state.input}
					onChange={onChange}
				/>
				<button>add</button>
				<div>
					<button onClick={clearItems}>clear completed</button>
				</div>
			</form>
		</div>
	);
}
