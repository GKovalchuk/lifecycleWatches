import './App.css';
import { useState } from 'react';
import AddWatchForm from './components/AddWatchForm';
import Watches from './components/Watches';

function App() {
	const [watches, setWatches] = useState([{
		city: "Moscow",
		timeZone: 3,
	}]);

	function addWatch(newWatch) {
		setWatches(prevState => ([...prevState, newWatch]))
	}
	function removeWatch(removedItem) {
		setWatches(prevState => prevState.filter(item => (item !== removedItem)))
	}


	return (
		<div className="App">
			<AddWatchForm addWatch={addWatch} />
			<Watches watches={watches} removeWatch={removeWatch} />
		</div>
	);
}

export default App;
