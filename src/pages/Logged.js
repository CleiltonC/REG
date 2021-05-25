import React, { Component } from "react";

class Logged extends Component {
  render() {
    return (
      <>
        <div className="FormTitle">
          <h1>
            <a href="#" className="FormTitle__Link--Active">
              Registro Eletrônico de Ponto
            </a>
          </h1>
        </div>

        <div className="FormField" style={{ display: "inline-block" }}>
          <button className="FormField__Button mr-20">Entrada</button>
        </div>

        <div className="FormField" style={{ display: "inline-block" }}>
          <button className="FormField__Button mr-20">Intervalo</button>
        </div>

        <div className="FormField" style={{ display: "inline-block" }}>
          <button className="FormField__Button mr-20">Retorno</button>
        </div>

        <div className="FormField" style={{ display: "inline-block" }}>
          <button className="FormField__Button mr-20">Saída</button>
        </div>
      </>
    );
  }
}

export default Logged;
