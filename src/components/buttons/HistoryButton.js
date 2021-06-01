import React from "react";

import { useHistory } from "react-router-dom";

const HistoryButton = () => {
  const history = useHistory();

  const clique = () => {
    return history.push("/History");
  };

  return (
    <div className="FormField" style={{ display: "inline-block" }}>
      <div className="FormField__Button mr-20 " onClick={clique}>
        Consultar Histórico
      </div>
    </div>
  );
};

export default HistoryButton;
