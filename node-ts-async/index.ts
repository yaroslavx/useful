import { PromisePool } from '@supercharge/promise-pool/dist/promise-pool.js';
import { PokemonInfo, getPokemon, getPokemonList } from './src/getPokemon.js';

try {
  const listPromise = await getPokemonList();
  // for (let listItem of listPromise.results) {
  //   const pokemon = await getPokemon(listItem.url);
  //   console.log(pokemon.name);
  // }

  // listPromise.results.reduce<Promise<unknown>>(async (promise, pokemon) => {
  //   await promise;
  //   return getPokemon(pokemon.url).then((p) => console.log(p.name));
  // }, Promise.resolve(undefined));

  // Promise.all(
  //   listPromise.results.map((pokemon, index) =>
  //     getPokemon(pokemon.url).then((p) => console.log(index, p.name))
  //   )
  // );

  const { results, errors } = await PromisePool.withConcurrency(7)
    .for(listPromise.results)
    .process(async (data: PokemonInfo) => {
      return await getPokemon(data.url);
    });

  console.log(results.map((p) => p.name));
  console.log('>> DONE');
} catch (error) {
  console.error(error);
}
