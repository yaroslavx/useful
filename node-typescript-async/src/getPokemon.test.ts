// @ts-ignore
import { getPokemonList } from './getPokemon.ts.js';

describe('getPokemon', () => {
  it('getPokemonList', async () => {
    const pokemons = await getPokemonList();
    expect(pokemons.results[0].name).toBe('bulbasaur');
  });
});
