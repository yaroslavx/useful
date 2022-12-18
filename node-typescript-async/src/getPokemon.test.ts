// @ts-ignore
import { getPokemonList } from './getPokemon.ts';

describe('getPokemon', () => {
  it('getPokemonList', async () => {
    const pokemons = await getPokemonList();
    expect(pokemons.results[0].name).toBe('bulbasaur');
  });
});
