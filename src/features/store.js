import { configureStore } from '@reduxjs/toolkit/';
import pokemonsReducer from './slice/pokemonSlice';

export default configureStore({
	reducer: {
		pokemons: pokemonsReducer,
	},
});
