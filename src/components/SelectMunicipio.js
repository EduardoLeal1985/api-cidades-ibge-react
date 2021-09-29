import React, {useState, useEffect} from "react";

import { municipios } from "../services/api";

const SelectMunicipio = props => {
  const [municipio, setMunicipio] = useState([]);
  const [municipioSelecionado, setMunicipioSelecionado] = useState('');

  const handleEscolheMunicipio = event => {
    setMunicipioSelecionado(event.target.value);
    props.onChangeMunicipio(event.target.value + ' - ' + props.uf.nome);
  }

  useEffect(() => {
    municipios
    .get(`${props.uf.id}/municipios`)
    .then(item => setMunicipio(item.data))
    .catch((err)=>{
      console.error("ops! ocorreu um erro " + err);
    });
  }, [props.uf.id]);

  return (
    <div>
      <select value={municipioSelecionado} onChange={handleEscolheMunicipio}>
        <option value=""></option>
        {municipio.map(item => <option key={item.id} value={item.nome}>{item.nome}</option>)}
      </select>
    </div>
  );

}

export default SelectMunicipio;
