import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemons = async () => {
	try {
		await axios.get('https://pokeapi.co/api/v2/pokemon');
	} catch (error) {
		console.log(error);
	}
};
