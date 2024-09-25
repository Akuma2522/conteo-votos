import React from 'react';

const Filtro = ({ filtro, setFiltro, candidatosVisibles, setCandidatosVisibles }) => {
  const cambiarFiltro = (e) => setFiltro(e.target.value);

  const cambiarVisibilidad = (indice) => {
    const nuevaVisibilidad = [...candidatosVisibles];
    nuevaVisibilidad[indice] = !nuevaVisibilidad[indice];
    setCandidatosVisibles(nuevaVisibilidad);
  };

  return (
    <div className="filtro">
      <h3>Ver</h3>
      <label>
        <input
          type="radio"
          value="numerico"
          checked={filtro === 'numerico'}
          onChange={cambiarFiltro}
        />
        Total
      </label>
      <label>
        <input
          type="radio"
          value="porcentaje"
          checked={filtro === 'porcentaje'}
          onChange={cambiarFiltro}
        />
        %
      </label>
      <h4>Mostrar candidatos:</h4>
      {['Candidato 1', 'Candidato 2', 'Candidato 3', 'Candidato 4'].map((nombre, i) => (
        <label key={i}>
          <input
            type="checkbox"
            checked={candidatosVisibles[i]}
            onChange={() => cambiarVisibilidad(i)}
          />
          {nombre}
        </label>
      ))}
    </div>
  );
};

export default Filtro;
