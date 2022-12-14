import Watch from './Watch';
import { nanoid } from 'nanoid';
import '../assets/css/Watches.css'

function Watches(props) {
	const arrOfWatches = props.watches;

	return (
		<div className='block_of_watches'>
			{arrOfWatches.map(watchItem => <Watch key={nanoid()} watchId={watchItem.id} city={watchItem.city} timeZone={watchItem.timeZone} removeWatch={props.removeWatch} />)}
		</div>
	)
}

export default Watches;