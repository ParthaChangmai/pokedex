import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	pokemons: [],
	loading: true,
	error: null,
};

export const getAllPokemons = createAsyncThunk(
	'pokemons/getAllPokemons',
	() => {
		return axios
			.get('https://pokeapi.co/api/v2/pokemon/')
			.then((res) => {
				return res.data.results;
			})
			.then((results) => {
				return Promise.all(results.map((res) => axios.get(res.url)));
			});
	}
); // async thunk

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getAllPokemons.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getAllPokemons.fulfilled, (state, action) => {
			state.pokemons = action.payload;
			state.loading = false;
		});
		builder.addCase(getAllPokemons.rejected, (state, action) => {
			state.error = action.error;
			state.loading = false;
		});
	},
});

export default pokemonsSlice.reducer;
