import React, { useState } from "react";
import SelectMunicipio from "./SelectMunicipio";
import SelectUF from "./SelectUF";
import './Form.css';

const Form = props => {

  const [selectedUF, setSelectedUF] = useState({});
  const [selectedMunicipio, setSelectedMunicipio] = useState({});

  const handleChangeUF = uf => {
    setSelectedUF(uf);
  }

  const handleChangeMunicipio = municipio => {
    setSelectedMunicipio(municipio);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onChangeMunicipio(selectedMunicipio);
  }

  return (
    <form className="form-box" onSubmit={submitHandler}>
      <SelectUF onChangeUF={handleChangeUF} />
      <SelectMunicipio uf={selectedUF} onChangeMunicipio={handleChangeMunicipio} />
      <button type="submit">Selecionar Município</button>
    </form>
  );
}

export default Form;
