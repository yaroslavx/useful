// @ts-ignore
import fetch from 'node-fetch';

export interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonInfo {
  name: string;
  url: string;
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: PokemonInfo;
}

export interface Pokemon {
  id: number;
  name: string;
  stats: PokemonStats;
}

export const getPokemonList = async (): Promise<PokemonList> => {
  const listResponse = await fetch('https://pokeapi.co/api/v2/pokemon');
  return (await listResponse.json()) as PokemonList;
};

export const getPokemon = async (url: string): Promise<Pokemon> => {
  const statRespose = await fetch(url);
  return (await statRespose.json()) as Pokemon;
};

export const getFirstPokemon = async (): Promise<Pokemon> =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('Runnig promise');
      const pokemonList = await getPokemonList();
      resolve(await getPokemon(pokemonList.results[0].url));
    } catch (error) {
      reject(error);
    }
  });
