import React from "react";

import { useHistory } from "react-router-dom";

const JustifyButton = () => {
  const history = useHistory();

  const clique = () => {
    return history.push("/justify");
  };

  return (
    <div className="FormField" style={{ display: "inline-block" }}>
      <div className="FormField__Button mr-20 Justify__Button" onClick={clique}>
        Justificativa
      </div>
    </div>
  );
};

export default JustifyButton;
