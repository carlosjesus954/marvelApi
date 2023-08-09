import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useFetch } from "../hooks/useFetch";
import { useComics } from "../hooks/useComics";
// import { useComics } from "../hooks/useComics";

export const Provider = ({ children }) => {
  const [personajes, setPersonajes] = useState([]);
  const [comics, setComics] = useState([]);
  const [comicActivate, setComicActivate] = useState(false);

  const [favoritosActivo, setFavoritosActivo] = useState(false);
  const [personajesFavoritos, setPersonajesFavoritos] = useState([]);

  const [descriptionPersonaje, setDescriptionPersonaje] = useState({
    name: "",
    img: "",
    id: "",
  });

  const pushPersonajeDescription = ({ name, img, id }) => {
    console.log("Y aqui en el provider", name, img, id);
    setDescriptionPersonaje((prevState) => ({
      ...prevState,
      name: name,
      img: img,
      id: id,
    }));
  };

  const onChangeFavoritos = () => {
    setFavoritosActivo(!favoritosActivo);
  };
  const changeComicActivate = () => {
    setComicActivate(!comicActivate);
  };

  const getPersonajes = async () => {
    const datos = await useFetch();
    const { results } = datos.data;
    setPersonajes(results);
    // console.log("personajes aleatorios", results);
  };
  const busquedaPersonajes = async (search) => {
    const datos = await useFetch(search);
    const { results } = datos.data;
    setPersonajes(results);
    // console.log("personaje buscado:", results);
  };

  const getComics = async () => {
    const datos = await useComics();
    const { results } = datos.data;
    setComics(results);
    // console.log("comics", results);
  };

  const busquedaComics = async (search) => {
    const datos = await useComics(search);
    const { results } = datos.data;
    setComics(results);
    // console.log("comic buscado:", results);
  };

  useEffect(() => {
    getPersonajes();
    busquedaPersonajes();
  }, []);
  useEffect(() => {
    getComics();
    busquedaComics();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        personajes,
        busquedaPersonajes,
        comics,
        comicActivate,
        changeComicActivate,
        busquedaComics,
        descriptionPersonaje,
        pushPersonajeDescription,
        favoritosActivo,
        personajesFavoritos,
        onChangeFavoritos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
