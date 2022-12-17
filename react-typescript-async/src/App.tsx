
import './App.css';
import { PromisePool } from '@supercharge/promise-pool';
import { Pokemon, PokemonInfo, getPokemon, getPokemonList } from './components/getPokemon';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  useEffect(() => {
    const fetchPokemons = async () => {
      const listPromise = await getPokemonList();
      const { results, errors } = await PromisePool.withConcurrency(7)
        .for(listPromise.results)
        .process(async (data: PokemonInfo) => {
          return await getPokemon(data.url);
        });

      setPokemons(results)
      console.log(results.map((p) => p.name));
      console.log('>> DONE');
    }
    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <ul>
        {pokemons.map(p =>
          <li key={p.id}>{p.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
