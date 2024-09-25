import React from 'react';

const Candidato = ({ nombre, votar }) => {
  return (
    <div className="candidato">
      <button onClick={votar} >{nombre}</button>
    </div>
  );
};

export default Candidato;
