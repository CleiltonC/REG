import React from "react";
import In from "../components/buttons/In";
import Out from "../components/buttons/Out";
import Exit from "../components/buttons/Exit";
import HistoryButton from "../components/buttons/HistoryButton";
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

      <In />

      <Out />

      <div className="bottom">
        <Exit />

        <HistoryButton />
      </div>
    </>
  );
};

export default Home;
