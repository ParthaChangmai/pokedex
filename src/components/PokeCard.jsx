import React from 'react';
import { Link } from 'react-router-dom';

const PokeCard = ({ pokemon }) => {
	// switch (pokemon.types[0].type.name) {
	// 	case 'normal':
	// 		var color = 'bg-normal';
	// 		break;
	// 	case 'fighting':
	// 		var color = 'bg-fighting';
	// 		break;
	// 	case 'flying':
	// 		var color = 'bg-flying';
	// 		break;
	// 	case 'poison':
	// 		var color = 'bg-poison';
	// 		break;
	// 	case 'ground':
	// 		var color = 'bg-ground';
	// 		break;
	// 	case 'rock':
	// 		var color = 'bg-rock';
	// 		break;
	// 	case 'bug':
	// 		var color = 'bg-bug';
	// 		break;
	// 	case 'ghost':
	// 		var color = 'bg-ghost';
	// 		break;
	// 	case 'steel':
	// 		var color = 'bg-steel';
	// 		break;
	// 	case 'fire':
	// 		var color = 'bg-fire';
	// 		break;
	// 	case 'water':
	// 		var color = 'bg-water';
	// 		break;
	// 	case 'grass':
	// 		var color = 'bg-grass';
	// 		break;
	// 	case 'electric':
	// 		var color = 'bg-electric';
	// 		break;
	// 	case 'psychic':
	// 		var color = 'bg-psychic';
	// 		break;
	// 	case 'ice':
	// 		var color = 'bg-ice';
	// 		break;
	// 	case 'dragon':
	// 		var color = 'bg-dragon';
	// 		break;
	// 	case 'dark':
	// 		var color = 'bg-dark';
	// 		break;
	// 	case 'fairy':
	// 		var color = 'bg-fairy';
	// 		break;
	// 	default:
	// 		var color = 'bg-normal';
	// }

	return (
		<Link to={`/pokemon/${pokemon.name}`}>
			<div
				className={`font-semibold bg-${pokemon.types[0].type.name} hover:bg-opacity-100 shadow-lg shadow-gray-600 hover:shadow-lg hover:shadow-${pokemon.types[0].type.name} bg-opacity-70 container mx-auto rounded-bl-3xl rounded-tr-3xl text-white flex flex-col items-center gap-1 p-6 cursor-pointer transition-all duration-500 ease-in-out`}
			>
				<div>
					<img
						className="h-40"
						src={pokemon.sprites.other.dream_world.front_default}
						alt="pokemon"
					/>
				</div>
				<div>
					<h1 className="font-extrabold uppercase text-2xl">{pokemon.name}</h1>
				</div>
				<div className="flex gap-2 capitalize text-lg">
					<p>height</p>
					<p>{pokemon.height}</p>
				</div>
				<div className="flex gap-5 opacity-90 pt-5">
					{pokemon.types.map((type) => (
						<p
							className={` bg-${type.type.name} px-4 py-2 border-2 border-white rounded-lg capitalize`}
						>
							{type.type.name}
						</p>
					))}
				</div>
			</div>
		</Link>
	);
};

export default PokeCard;
