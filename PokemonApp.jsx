import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './src/store/slices/pokemon/thunks';

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const {isLoading, pokemons, page} = useSelector((state) => state.pokemons)

    useEffect(() => {
      dispatch(getPokemons(0));
    }, [])
    

  return (
    <>
        <h1>PokemonApp</h1>
        <hr/>
        {isLoading&&'LOADING...'}
        <ul>
            {pokemons.map((pokemon) =>
            <li key={pokemon.name}> {pokemon.name}</li>
            )}
        </ul>
        <button onClick={() => dispatch(getPokemons(page))}>
          Next
        </button>
    </>
  )
}
