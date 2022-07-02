import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSinglePokemon } from '../features/slice/singlePokemonSlice';
import ImageCard from '../components/ImageCard';
import PokemonDetails from '../components/PokemonDetails';

const SinglePokemon = () => {
	const params = useParams();
	const { name } = params;

	const dispatch = useDispatch();
	const pokemon = useSelector((state) => state.singlePokemon);

	const { error, loading, pokemons } = pokemon;
	console.log(pokemon, name);

	useEffect(() => {
		dispatch(getSinglePokemon({ name }));
	}, [name]);

	return (
		<div className="grid place-items-center min-h-screen">
			{loading && <div>Loading...</div>}
			{error && <div>Error!</div>}
			{pokemons && (
				<div className="flex">
					<div>{<ImageCard images={pokemons.sprites} />}</div>
					<div>{<PokemonDetails pokemons={pokemons} />}</div>
				</div>
			)}
		</div>
	);
};

export default SinglePokemon;
