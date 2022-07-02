import React, { useState } from 'react';

const PokemonDetails = ({ pokemons }) => {
	const [about, setAbout] = useState(true);
	const [stats, setStats] = useState(false);
	const [moves, setMoves] = useState(false);

	const changeData = (e) => {
		if (e.target.id === 'about') {
			setAbout(true);
			setStats(false);
			setMoves(false);
		}
		if (e.target.id === 'stats') {
			setAbout(false);
			setStats(true);
			setMoves(false);
		}
		if (e.target.id === 'moves') {
			setAbout(false);
			setStats(false);
			setMoves(true);
		}
	};

	const { name } = pokemons;
	return (
		<div>
			<div className="font-bold uppercase text-3xl">{name}</div>
			<div className="flex gap-2">
				<div id="about" onClick={changeData}>
					About
				</div>
				<div id="stats" onClick={changeData}>
					Stats
				</div>
				<div id="moves" onClick={changeData}>
					Evolution
				</div>
			</div>
		</div>
	);
};

export default PokemonDetails;
