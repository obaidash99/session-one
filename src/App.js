import './App.css';
import Greeting from './components/Greeting';

function App() {
	const myName = 'Obaida';
	function greeting(name) {
		const profileLink = 'https://google.com';
		if (name) {
			return (
				<h2 className="name-title">
					Hello, <a href={profileLink}>{name}</a>
				</h2>
			);
		} else {
			return <h2>Hello, Guest</h2>;
		}
	}
	return (
		<>
			<div className="App">
				<h1>Hello React App</h1>
				{greeting(myName)}
			</div>
			<div className="terst">Teeessstttt</div>
			<Greeting />
		</>
	);
}

export default App;
