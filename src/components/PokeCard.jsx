import React from 'react';

const PokeCard = ({ pokemon }) => {
	console.log(pokemon);
	return (
		<div className="bg-black hover:opacity-80 container mx-auto rounded-bl-3xl rounded-tr-3xl text-white flex flex-col items-center gap-1 p-6 cursor-pointer">
			<div>
				<img
					className={`bg-${pokemon.types[0].type.name} rounded-full`}
					src={pokemon.sprites.front_default}
					alt="pokemon"
				/>
			</div>
			<div>
				<h1 className="font-bold uppercase text-2xl">{pokemon.name}</h1>
			</div>
			<div className="flex gap-2 capitalize text-lg">
				<p>height</p>
				<p>{pokemon.height}</p>
			</div>
			<div className="flex gap-5 pt-5">
				{pokemon.types.map((type) => (
					<p
						className={` bg-${type.type.name} px-4 py-2 border-2 border-gray-400`}
					>
						{type.type.name}
					</p>
				))}
			</div>
		</div>
	);
};

export default PokeCard;
