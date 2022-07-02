import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://pokeapi.co/api/v2';

export const pokemonApi = createApi({
	reducerPath: 'pokemon',
	baseQuery: fetchBaseQuery({ baseURL }),
	endpoints: ({ builder }) => ({
		getPokemons(limit, offset) {
			return builder.get(`/pokemon`);
		},
	}),
});

export const { useGetPokemonsQuery } = pokemonApi;
