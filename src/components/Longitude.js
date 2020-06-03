import React, { useState } from "react";
import Events from "./Events";
function Longitude() {
  const [mToIn, setMToIn] = useState({ result: "" });
  const [mToFt, setMToFt] = useState({ result: "" });
  const [mToYd, setMToYd] = useState({ result: "" });
  const [mToMi, setMToMi] = useState({ result: "" });

  // Esta función se encarga de realizar las conversiones
  const handleSubmit = (valor) => {
    let In = 39.37; //valor de metro en pulgadas
    let ft = 3.281; //valor de metro en pies
    let yd = 1.093; //valor de metro en yardas
    let mi = 0.00062137; // valor de metro en millas
    //aca se muestra en el estado los resultados
    setMToIn({ result: In * valor });
    setMToFt({ result: ft * valor });
    setMToYd({ result: yd * valor });
    setMToMi({ result: mi * valor });
  };

  return (
    <div className="container card1">
      <div className="col-md-5  ">
        <div className=" card card-body bg-ligth item">
          <h3 className="card-title card-header">Conversor de Metros</h3>
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
              <Events
                className="form-control "
                placeholder="Metros a convertir"
                readonly
                onSubmit={handleSubmit}
              />
              <p className="card-text"> Valor en pulgadas: {mToIn.result}</p>
              <p className="card-text"> Valor en pies: {mToFt.result}</p>
              <p className="card-text"> Valor en Yardas: {mToYd.result}</p>
              <p className="card-text"> Valor en Millas: {mToMi.result}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Longitude;
