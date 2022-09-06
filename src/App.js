import './App.css';
import AddWatchForm from './components/AddWatchForm';
import Watches from './components/Watches';

function App() {
	return (
		<div className="App">
			<AddWatchForm />
			<Watches />
		</div>
	);
}

export default App;
