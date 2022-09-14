import Watch from './Watch';
import { nanoid } from 'nanoid';
import '../assets/css/Watches.css'

function Watches(props) {
	const arrOfWatches = props.watches;

	return (
		<div className='block_of_watches'>
			{arrOfWatches.map(watchItem => <Watch key={nanoid()} watchId={nanoid()} city={watchItem.city} timeZone={watchItem.timeZone} />)}
		</div>
	)
}

export default Watches;