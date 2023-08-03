import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useFetch } from "../hooks/useFetch";

export const Provider = ({ children }) => {
  const [personajes, setPersonajes] = useState([]);
  const [comics, setComics] = useState([]);
  const [comicActivate, setComicActivate] = useState(false);

  const changeComicActivate = () => {
    setComicActivate(!comicActivate);
  };

  const getPersonajes = async () => {
    const datos = await useFetch();
    const { results } = datos.data;
    setPersonajes(results);
    // console.log(results);
  };
  const busquedaPersonajes = async (search) => {
    const datos = await useFetch(search);
    const { results } = datos.data;
    setPersonajes(results);
    // console.log(results);
  };

  const getComics = async () => {
    const datos = await useFetch();
    const { results } = datos.data;
    setComics(results);
    // console.log(comics);
  };

  useEffect(() => {
    getPersonajes();
    busquedaPersonajes();
    // console.log(personajes);
  }, []);
  useEffect(() => {
    getComics();
    console.log(comics);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        personajes,
        busquedaPersonajes,
        comics,
        comicActivate,
        changeComicActivate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
