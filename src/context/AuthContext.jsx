import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const name = "RiaJul";
  const value = {
    name,
  };
  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
