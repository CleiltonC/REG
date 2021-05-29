import React from "react";
import Entrada from "../components/buttons/Entrada";
import Saida from "../components/buttons/Saida";
import JustifyButton from "../components/buttons/JustifyButton";
import Time from "../utils/Time";

const Home = () => {
  document.title = "Home";
  return (
    <>
      <div className="FormTitle">
        <h1>
          <p href="#" className="FormTitle__Link--Active">
            Registro Eletrônico de Ponto
          </p>
        </h1>
      </div>

      <Time />

      <Entrada />

      <Saida />

      <JustifyButton />
    </>
  );
};

export default Home;
