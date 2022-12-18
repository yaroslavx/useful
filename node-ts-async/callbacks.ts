export interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: {
    name: string;
    url: string;
  }[];
}

function getPokemonList(
  cb: (err: Error | undefined, pokemonList: PokemonList | undefined) => void
): void;
function getPokemonList(): Promise<PokemonList>;
function getPokemonList(
  cb?: (err: Error | undefined, pokemonList: PokemonList | undefined) => void
): Promise<PokemonList> | void {
  if (cb) {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data: PokemonList) => cb(undefined, data))
      .catch((err) => cb(err, undefined));
    return undefined;
  } else {
    return fetch('https://pokeapi.co/api/v2/pokemon').then((res) => res.json());
  }
}

getPokemonList((_err, data) => {
  console.log(data);
});

(async function () {
  const list = await getPokemonList();
  console.log(list?.results);
})();
