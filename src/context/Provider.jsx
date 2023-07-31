import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const Provider = ({ children }) => {
  const [character, setCharacter] = useState("");
  const [personajes, setPersonajes] = useState([]);

  const handleSearchSubmit = (searchQuery) => {
    console.log("enviando consulta de busqueda", searchQuery);
    setCharacter(searchQuery);
  };
  return (
    <AuthContext.Provider
      value={{ character, handleSearchSubmit, personajes, setPersonajes }}
    >
      {children}
    </AuthContext.Provider>
  );
};
