import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useFetch } from "../hooks/useFetch";

export const Provider = ({ children }) => {
  const [personajes, setPersonajes] = useState([]);
  const [searching, setSearching] = useState("");

  const getPersonajes = async () => {
    const datos = await useFetch();
    const { results } = datos.data;
    setPersonajes(results);
    console.log(results);
  };

  const busquedaPersonajes = async (search) => {
    setSearching(search);
    const datos = await useFetch(searching);
    const { results } = datos.data;
    setPersonajes(results);
    console.log(results);
  };

  useEffect(() => {
    getPersonajes();
    busquedaPersonajes();
  }, []);

  return (
    <AuthContext.Provider value={{ personajes, busquedaPersonajes, searching }}>
      {children}
    </AuthContext.Provider>
  );
};
