/* eslint-disable no-unused-vars */

import { useState } from 'react';

function preventDefault() {
    
const Formulario = () => {
  const [nome, setNome] = useState('');

  const aoEnviar = (evento) => {
    evento.preventDefault();
    alert(`Olá, ${nome}!`);
    setNome('');
  };

  return (
    <form onSubmit={aoEnviar}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

}

export default preventDefault