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
    console.log("personajes", results);
  };

  const getComics = async () => {
    const datos = await useFetch();
    const { results } = datos.data;
    setComics(results);
    // console.log(comics);
    console.log("comics", results);
  };

  useEffect(() => {
    getPersonajes();
    busquedaPersonajes();
  }, []);
  useEffect(() => {
    getComics();
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
