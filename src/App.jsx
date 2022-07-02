import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Pokemons from './pages/Pokemons';
import SinglePokemon from './pages/SinglePokemon';
import './index.css';

function App() {
	return (
		<div className="min-h-screen bg-slate-800">
			<Routes>
				<Route path="/" element={<Pokemons />} />
				<Route path="/pokemon/:name" element={<SinglePokemon />} />
			</Routes>
		</div>
	);
}

export default App;
