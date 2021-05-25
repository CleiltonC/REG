import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import StoreContext from "C:/Users/cleil/Documents/react_projects/REG/ponto_eletronico/src/components/Store/Context";

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() =>
        token ? <Component {...rest} /> : <Redirect to="/logIn" />
      }
    />
  );
};

export default RoutesPrivate;
