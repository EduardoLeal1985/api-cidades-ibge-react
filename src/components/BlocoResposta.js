import React from "react";

import './BlocoResposta.css';

const BlocoResposta = props => {
  return (
    <div className='bloco-resposta'>
      {props.municipio ? `Você selecionou o município ${props.municipio}` : 'Você ainda não selecionou um município'}      
    </div>
  );
}

export default BlocoResposta;
