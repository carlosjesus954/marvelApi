import { AuthContext } from "./AuthContext";

export const Provider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
