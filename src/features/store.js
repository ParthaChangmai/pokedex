import { configureStore } from '@reduxjs/toolkit/';
import pokemonsReducer from './slice/pokemonSlice';
import singlePokemonReducer from './slice/singlePokemonSlice';

export default configureStore({
	reducer: {
		pokemons: pokemonsReducer,
		singlePokemon: singlePokemonReducer,
	},
});
