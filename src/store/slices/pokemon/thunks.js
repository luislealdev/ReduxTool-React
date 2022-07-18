import { pokemonApi } from "../../../api/pokemonApi";
import { firtsLoadingPokemons, setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(firtsLoadingPokemons());

    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    console.log(data);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
