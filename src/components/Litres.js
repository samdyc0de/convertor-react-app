import React, { useState } from "react";
import Events from "./Events";

function Litres() {
  const [ltToFt, setLtToFt] = useState({ result: "" });
  const [ltToBbl, setLtToBbl] = useState({ result: "" });
  const [ltToMc, setLtToMc] = useState({ result: "" });
  // Esta función se encarga de realizar las conversiones
  const handleSubmit = (valor) => {
    let ft = 0.0353;
    let bbl = 0.0063;
    let mc = 0.001;

    setLtToFt({ result: ft * valor });
    setLtToBbl({ result: bbl * valor });
    setLtToMc({ result: mc * valor });
  };
  return (
    <div className="row card1">
      <div className="col-md-5">
        <div className="card card-body item">
          <h3 className="card-title card-header ">Conversor de Litros</h3>
          <form onSubmit={(event) => event.preventDefault()}>
            <Events onSubmit={handleSubmit} />
            <p>Valor en pies cubicos: {ltToFt.result}</p>
            <p>Valor en barriles: {ltToBbl.result}</p>
            <p>Valor en metros cubicos: {ltToMc.result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Litres;
