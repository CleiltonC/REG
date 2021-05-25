import React from "react";
import Context from "./Context";
import useStorage from "C:/Users/cleil/Documents/react_projects/REG/ponto_eletronico/src/utils/useStorage";

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");

  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
