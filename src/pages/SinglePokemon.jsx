import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSinglePokemon } from '../features/slice/singlePokemonSlice';

const SinglePokemon = () => {
	const params = useParams();
	const { name } = params;

	const dispatch = useDispatch();
	const pokemon = useSelector((state) => state.singlePokemon);

	const { error, loading, pokemons } = pokemon;

	useEffect(() => {
		dispatch(getSinglePokemon({ name }));
	}, [dispatch, name]);

	return <div>SinglePokemon</div>;
};

export default SinglePokemon;
