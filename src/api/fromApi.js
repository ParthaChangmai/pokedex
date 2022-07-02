import { createApiRequest } from './axios';

class ApiCall {
	getPokemons(limit, offset) {
		return createApiRequest(`/pokemon?limit=${limit}&offset=${offset}`, 'GET');
	}
	getPokemonById(id) {
		return createApiRequest(`/pokemon/${id}`, 'GET');
	}
	getSpeciesById(id) {
		return createApiRequest(`/pokemon-species/${id}`, 'GET');
	}
	getEvolutionChainById(id) {
		return createApiRequest(`/evolution-chain/${id}`, 'GET');
	}
}

const fromApi = new ApiCall();
export default fromApi;
