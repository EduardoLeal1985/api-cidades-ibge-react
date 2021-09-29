import React, {useState, useEffect} from "react";

import { estados } from "../services/api";

const SelectUF = props => {
  const [uf, setUf] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState({id: '35', nome: 'SP'});

  const handleEscolheEstado = event => {
    const estado = uf.filter(item => (item.id.toString() === event.target.value.toString()));
    setEstadoSelecionado({id: estado[0].id, nome: estado[0].sigla});
    props.onChangeUF({id: estado[0].id, nome: estado[0].sigla});
  }

  useEffect(() => {
    estados
    .get()
    .then(item => setUf(item.data))
    .catch((err)=>{
      console.error("ops! ocorreu um erro " + err);
    });
  }, [uf]);

  return (
    <div>
      <select value={estadoSelecionado.id} onChange={handleEscolheEstado}>
        {uf.map(item => <option key={item.id} value={item.id}>{item.nome}</option>)}
      </select>
    </div>
  );

}

export default SelectUF;
