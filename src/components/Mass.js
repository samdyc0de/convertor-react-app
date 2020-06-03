import React, { useState } from "react";
import Events from "./Events";

function Mass() {
  const [kgToLb, setKgToLb] = useState({ result: "" });
  const [kgToT, setKgToT] = useState({ result: "" });
  const [kgToOz, setKgToOz] = useState({ result: "" });
  // Esta función se encarga de realizar las conversiones
  const handleSubmit = (valor) => {
    let lb = 2.2046;
    let t = 0.001;
    let oz = 35.274;

    setKgToLb({ result: lb * valor });
    setKgToT({ result: t * valor });
    setKgToOz({ result: oz * valor });
  };
  return (
    <div className="row card1">
      <div className="col-md-5">
        <div className="card card-body item">
          <h3 className="card-title card-header ">Conversor de Masa</h3>
          <form onSubmit={(event) => event.preventDefault()}>
            <Events onSubmit={handleSubmit} />
            <p>Valor en Libras: {kgToLb.result}</p>
            <p>Valor en Toneladas: {kgToT.result}</p>
            <p>Valor en Onzas: {kgToOz.result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Mass;
