import './App.css';
import Main from './components/Main/Main.jsx';
import Hero from './components/Hero/Hero.jsx';
import Header from './components/Header/Header.jsx';
import './index.css';

function App() {
	return (
		<div className="App">

			<div className="background">
			</div>

			<Header />
			<Hero />

			<Main />

		</div>
	);
}

export default App;
