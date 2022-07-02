import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import SinglePokemon from '../../pages/SinglePokemon';

const initialState = {
	pokemons: [],
	loading: true,
	error: null,
};

export const getSinglePokemon = createAsyncThunk(
	'singlePokemon/getSinglePokemon',
	({ name }) => {
		return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
			(res) => {
				return res.data;
			},
			(err) => {
				return err;
			}
		);
	}
);

const singlePokemonSlice = createSlice({
	name: 'singlePokemon',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getSinglePokemon.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getSinglePokemon.fulfilled, (state, action) => {
			state.pokemons = action.payload;
			state.loading = false;
		});
		builder.addCase(getSinglePokemon.rejected, (state, action) => {
			state.error = action.error;
			state.loading = false;
		});
	},
});

export default singlePokemonSlice.reducer;
