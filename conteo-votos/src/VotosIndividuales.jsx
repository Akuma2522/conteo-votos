import React from 'react';

const VotosIndividuales = ({ votos, filtro, totalVotos, candidatosVisibles }) => {
  const mostrarVotos = (votosCandidato) => {
    if (totalVotos === 0) return 0;
    return filtro === 'porcentaje'
      ? `${((votosCandidato / totalVotos) * 100).toFixed(2)}%`
      : `${votosCandidato} votos`;
  };

  return (
    <div className="votos-individuales">
      <h3>Resultados Individuales</h3>
      {votos.map((votosCandidato, i) => (
        candidatosVisibles[i] && (
          <p key={i}>
            Candidato {i + 1}: {mostrarVotos(votosCandidato)}
          </p>
        )
      ))}
    </div>
  );
};

export default VotosIndividuales;
