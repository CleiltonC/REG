import React from "react";
import Send from "../components/buttons/Send";

const History = () => {
  return (
    <>
      <div className="FormTitle">
        <h1>
          <p className="FormTitle__Link--Active">
            Registro Eletrônico de Ponto
          </p>
        </h1>
      </div>

      <div className="FormTitle ">
        <textarea className="input_history" type="text" maxLength="500" />
      </div>
      <Send />
    </>
  );
};

export default History;
