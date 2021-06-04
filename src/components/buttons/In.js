import React from "react";

import { useHour } from "../Store/HourContext";

function initialState() {
  return [];
}

const In = () => {
  const { hourIn, setHourIn, hourOut, setHourOut } = useHour(initialState);

  function getData() {
    const data = new Date();

    let hora = data.getHours(); // 0-23
    let min = data.getMinutes(); // 0-59
    let seg = data.getSeconds(); // 0-59

    hora = hora < 10 ? "0" + hora : hora;
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;

    // Formata a data e a hora (note o mês + 1)
    const str_hora = hora + ":" + min + ":" + seg;
    return str_hora;
  }

  function addToList() {
    if (hourOut.length === key) {
      hourIn.push({ text: getData() });
      setHourIn([...hourIn]);
    }
  }

  let key = hourIn.length;

  console.log(key);

  return (
    <div className="FormField" style={{ display: "inline-block" }}>
      <button onClick={addToList} className="FormField__Button In_Button mr-20">
        Entrada
      </button>
      <ul>
        {hourIn.map((hora) => (
          <li>{hora.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default In;
