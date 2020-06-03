import React, { useState } from "react";
export default ({ onSubmit }) => {
  const [valor, SetValor] = useState("");

  const handleChange = (event) => SetValor(event.target.value);
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(valor);
    }
  };
  return (
    <div>
      <input
        className="form-control"
        type="number"
        onChange={handleChange}
        onKeyPress={onKeyPress}
        value={valor}
      />
    </div>
  );
};
