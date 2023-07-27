import { useState, useEffect } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Tu lógica de fetching aquí (sin los returns)
      const url =
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6806045bee565cf05952dbe2eee6e9df&hash=66fa1d3509e0217997b7398ef5965276";
      const resp = await fetch(url);
      const { data } = await resp.json();
      setData(data); // Actualiza el estado con los datos obtenidos
    };

    fetchData();
  }, []);

  return data; // Devuelve los datos obtenidos
};
