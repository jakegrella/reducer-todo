export default function Form(props) {
	const { state, dispatch } = props;
	console.log('state in form', state);

	const handleAdd = (e) => {
		e.preventDefault();
		dispatch(state.addItem(e.target.value));
	};

	return (
		<form>
			<input type='text' />
			<button onClick={handleAdd}>add</button>
		</form>
	);
}
