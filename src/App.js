import React, { useState } from "react";

import Form from "./components/Form";
import BlocoResposta from "./components/BlocoResposta";

const App = () => {
  const [municipioSelecionado, setMunicipioSelecionado] = useState('');

  const handleChangeMunicipio = municipio => {
    setMunicipioSelecionado(municipio);
  }
  return (
    <div>
      <Form onChangeMunicipio={handleChangeMunicipio} />
      <BlocoResposta municipio={municipioSelecionado} />
    </div>
  )
}

export default App;
