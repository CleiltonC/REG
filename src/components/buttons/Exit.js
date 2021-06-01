import React, { useContext } from "react";

import { useHistory } from "react-router-dom";
import StoreContext from "../Store/Context";

const Exit = () => {
  const history = useHistory();
  const { setToken } = useContext(StoreContext);

  const clique = () => {
    setToken("");
    return history.push("/");
  };

  return (
    <div className="FormField" style={{ display: "inline-block" }}>
      <div className="FormField__Button mr-20" onClick={clique}>
        Sair
      </div>
    </div>
  );
};

export default Exit;
