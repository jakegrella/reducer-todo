import { setCompleted } from '../actions/itemActions';

export default function Item(props) {
	const { state, dispatch } = props;
	console.log('state', state);

	return (
		<div>
			<button
				onClick={() => {
					dispatch(setCompleted(!state.completed));
				}}
				className={`item ${state.completed ? 'completed' : ' '}`}
			>
				{state.item}
			</button>
		</div>
	);
}
