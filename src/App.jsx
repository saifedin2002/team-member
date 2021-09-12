import './App.scss';
import React from 'react';
import Team from './components/Team';
import MainHeader from './components/MainHeader';
function App() {
	return (
		<div className="App">
			<div className="container">
				<MainHeader />
				<Team />
			</div>
		</div>
	);
}

export default App;
