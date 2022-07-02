import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../features/slice/pokemonSlice';
import PokeCard from '../components/PokeCard';

const Pokemons = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemons);

	useEffect(() => {
		dispatch(getAllPokemons());
	}, []);

	return (
		<div className="px-2 flex flex-col items-center">
			<div className="pb-5 pt-2 text-white">
				<input
					type="text"
					placeholder="Search pokemon"
					className="px-2 md:px-5 py-1 rounded-lg bg-gray-800 border-2 border-gray-600"
				/>
				<button className="ml-4 rounded-lg px-2 py-1 bg-black hover:bg-slate-700">
					Search
				</button>
			</div>
			{pokemons.loading && <div>Loading...</div>}
			{pokemons.error && <div>Error!</div>}
			<div className="pb-2 grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-9 xl:gap-14">
				{pokemons.pokemons &&
					pokemons?.pokemons?.map(({ data }) => {
						return <PokeCard key={data.id} pokemon={data} />;
					})}
			</div>
		</div>
	);
};

export default Pokemons;
