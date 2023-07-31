import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useFetch = () => {
  const { character } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      if (character) {
        const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${character}&apikey=6806045bee565cf05952dbe2eee6e9df&hash=66fa1d3509e0217997b7398ef5965276`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        return data.results;
      } else {
        const url =
          "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6806045bee565cf05952dbe2eee6e9df&hash=66fa1d3509e0217997b7398ef5965276";
        const resp = await fetch(url);
        const { data } = await resp.json();
        return data.results;
      }
    };

    // Agregar el return aquí para devolver los datos obtenidos de la API
    return fetchData();
  }, [character]);
};
