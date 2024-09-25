import  React, { useState } from 'react';
import Candidato from './Candidato';
import TotalVotos from './TotalVotos';
import VotosIndividuales from './VotosIndividuales';
import Filtro from './Filtro';
import './App.css'; // Asegúrate de tener este archivo

const App = () => {
  const [votos, setVotos] = useState([0, 0, 0, 0]);
  const [filtro, setFiltro] = useState('numerico');
  const [candidatosVisibles, setCandidatosVisibles] = useState([true, true, true, true]);

  const votarPorCandidato = (indice) => {
    const nuevosVotos = [...votos];
    nuevosVotos[indice]++;
    setVotos(nuevosVotos);
  };

  const totalVotos = votos.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="container">
      <h1>Sistema de Votación</h1>
      <div className="candidatos">
        {['Candidato 1', 'Candidato 2', 'Candidato 3', 'Candidato 4'].map((nombre, i) => (
          <Candidato
            key={i}
            nombre={nombre}
            votar={() => votarPorCandidato(i)}
          />
        ))}
      </div>
      <div className="resultados">
        <Filtro
          filtro={filtro}
          setFiltro={setFiltro}
          candidatosVisibles={candidatosVisibles}
          setCandidatosVisibles={setCandidatosVisibles}
        />
        <div className="separador">
        <TotalVotos total={totalVotos} />
        <VotosIndividuales
          votos={votos}
          filtro={filtro}
          totalVotos={totalVotos}
          candidatosVisibles={candidatosVisibles}
        />
        </div>

      </div>
    </div>
  );
};

export default App;
