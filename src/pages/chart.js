import React from 'react';
import { BarChart, Bar, AreaChart, Area, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Colori predefiniti per le fette del grafico a torta in alternativa si poteva utilizzare una funzione per i colori casuali ma ho preferito questa soluzione
const pieChartColors = ['#938FFF', '#FFDA8F', '#82ca9d'];

function Chart({ stats }) {
  // Verifica se ci sono dati disponibili, altrimenti restituisci null
  if (!stats || !stats.real_time_stats || !stats.real_time_stats.calls) {
    return null;
  }

  // Estrai i dati relativi alle call
  const { answered_calls, not_answered_calls, on_hold_calls } = stats.real_time_stats.calls;


    // con le prossime costanti magari era possibile effettuarle in maniera più funzionale ma in un paio d'ore è stata la soluzione che mi è sembrata migliore


  // Trasforma i dati in un array di oggetti per il grafico
  const barChartData = [
    { name: 'Answered Calls', value: answered_calls },
    { name: 'Not Answered Calls', value: not_answered_calls },
    { name: 'On Hold Calls', value: on_hold_calls }
  ];

  // Trasforma i dati in un array di oggetti per il grafico a area
  const areaChartData = [
    { name: 'Answered Calls', value: answered_calls },
    { name: 'Not Answered Calls', value: not_answered_calls },
    { name: 'On Hold Calls', value: on_hold_calls }
  ];

  // Trasforma i dati in un array di oggetti per il grafico a torta
  const pieChartData = [
    { name: 'Answered Calls', value: answered_calls },
    { name: 'Not Answered Calls', value: not_answered_calls },
    { name: 'On Hold Calls', value: on_hold_calls }
  ];

  return (
    <div className="block justify-center items-center xl:flex">
      {/* Grafico a barre */}
      <div className='grid justify-center'>
        <div className='my-2 mx-3 px-3 bg-white rounded-lg w-96 mb-20 '>
          <p className='font-semibold text-sm p-4'>Grafico a barre </p>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart className='px-3' width={600} height={300} data={barChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <Tooltip />
              <Bar className='opacity-50 hover:opacity-100 transition-opacity' dataKey="value" fill='#938FFF' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grafico a area */}
      <div className='grid justify-center'>
        <div className="my-5 mx-3 px-3 bg-white rounded-lg w-96 mb-20">
          <p className='font-semibold text-sm p-4'>Grafico a area </p>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart className='px-3' width={600} height={300} data={areaChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <Area className='opacity-50 hover:opacity-100 transition-opacity' dataKey="value" fill='#938FFF' />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grafico a torta */}
      <div className='grid justify-center'>
        <div className="my-5 mx-3 px-3 bg-white rounded-lg w-96 mb-20">
          <p className='font-semibold text-sm p-4'>Grafico a torta</p>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
                className='opacity-70 hover:opacity-100'
              >
                {/* Imposta il colore delle fette del grafico a torta */}
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieChartColors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Chart;
