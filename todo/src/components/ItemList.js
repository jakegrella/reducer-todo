import Item from './Item';

export default function ListItem(props) {
	const { state, dispatch } = props;

	return <Item state={state} dispatch={dispatch} />;
}
