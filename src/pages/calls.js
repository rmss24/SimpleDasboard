import React from 'react';

function Calls({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-5 px-3 w-fit h-fit mr-auto ml-auto xl:grid-cols-4">
      {/* Mappatura dei dati (non so se si dice così in italiano) */}
      {stats ? (
        stats.agents.map((agent, index) => (
          <div key={index} className="bg-white rounded-lg w-fit mb-10 mr-10">
            <p className="text-slate-600 font-semibold text-sm p-4"> Operatore: {agent.name}</p>
            <p className="text-black text-sm mx-4 flex w-auto h-auto">Chiamate totali: <span className='font-semibold'>{agent.total_calls} </span></p>
            <p className={`text-black font-bold mx-4 flex w-auto h-auto ${agent.available ? 'text-green-500' : 'text-red-500'}`}>Disponibilità: {agent.available ? "Disponibile" : "Non disponibile"}</p>            
            <p className="text-black  text-sm mx-4 flex w-auto h-auto mb-5">Tempo totale in chiamata: <span className='font-semibold'>{agent.total_time_on_call} secondi</span></p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Calls;
