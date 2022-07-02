import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../features/slice/pokemonSlice';
import PokeCard from '../components/PokeCard';

const Pokemons = () => {
	const [limit, setLimit] = useState(15);

	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemons);

	useEffect(() => {
		dispatch(getAllPokemons({ limit }));

		window.addEventListener('scroll', function () {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				setLimit(limit + 10);
			}
		});
	}, [limit]);
	console.log(limit);

	return (
		<div className="container mx-auto px-2 flex flex-col items-center">
			<div className="py-12 text-black">
				<input
					type="text"
					placeholder="Search pokemon"
					className="px-2 md:px-5 py-3 rounded-lg bg-slate-100  border-none outline-none"
				/>
				<button className="ml-4 rounded-lg px-2 md:px-5 py-3 bg-slate-100 hover:text-white hover:bg-slate-700">
					Search
				</button>
			</div>
			{pokemons.loading && <div>Loading...</div>}
			{pokemons.error && <div>Error!</div>}
			<div className="pb-2 grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-9 xl:gap-14">
				{pokemons.pokemons &&
					pokemons?.pokemons?.map(({ data }) => {
						return <PokeCard key={data.id} pokemon={data} />;
					})}
			</div>
		</div>
	);
};

export default Pokemons;
