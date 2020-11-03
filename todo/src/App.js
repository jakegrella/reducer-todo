// import { useReducer } from 'react';
import './App.css';
import ItemList from './components/ItemList';
// import Form from './components/Form';
import { useReducer } from 'react';
import reducer from './reducers/itemReducer';
import { addItem, setItem } from './actions/itemActions';

function App() {
	const initialState = {
		item: 'visit great barrier reef',
		id: Date.now(),
		completed: false,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const handleAdd = (e) => {
		e.preventDefault();
		console.log('value', e.target.value);
		dispatch(addItem(e.target.value));
	};

	const handleChange = (e) => {
		dispatch(setItem(e.target.value));
	};

	return (
		<div className='App'>
			<h1>Bucket List</h1>
			<ItemList state={state} dispatch={dispatch} />

			<form onSubmit={handleAdd}>
				<input
					type='text'
					name='newItem'
					value={state.item}
					onChange={handleChange}
				/>
				<button
					type='submit'
					onClick={() => {
						dispatch(addItem(state.item));
					}}
				>
					add
				</button>
			</form>
			{/* <Form state={state} dispatch={dispatch} /> */}
		</div>
	);
}

export default App;
