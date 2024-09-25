import React from 'react';

const TotalVotos = ({ total }) => {
  return (
    <div className="total-votos">
      <h3>Total de Votos</h3>
      <p>{total}</p>
    </div>
  );
};

export default TotalVotos;
