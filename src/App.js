import React, { useState, useEffect } from 'react';
import Calls from './pages/calls';
import Widget from './pages/widget';
import Chart from './pages/chart';
import Navbar from './pages/navbar';

function App() {
  // Stati per immagazzinare i dati della chiamata
  const [stats, setStats] = useState(null);
  const [totalCalls, setTotalCalls] = useState(0);
  const [notAnsweredCalls, setNotAnsweredCalls] = useState(null);
  const [refusedCalls, setRefusedCalls] = useState(null);

  useEffect(() => {
    // Abbiamo ottenuto API 
    const fetchStats = async () => {
      try {
        const response = await fetch('https://01-fake-api.mediamaxcommunication.com/api/call-center/stats', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer 1|0D97uwxv43VZgSdSVIimCXy7nwRbDvyXt79wBCqD09b8201b'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const statsData = await response.json();
        setStats(statsData);

        // Calcola il totale delle chiamate, chiamate non risposte e chiamate rifiutate
        if (statsData && statsData.real_time_stats && statsData.real_time_stats.calls) {
          const total = statsData.real_time_stats.calls.answered_calls + statsData.real_time_stats.calls.not_answered_calls + statsData.real_time_stats.calls.on_hold_calls;
          setTotalCalls(total);
          setNotAnsweredCalls(statsData.real_time_stats.calls.not_answered_calls);
          setRefusedCalls(statsData.real_time_stats.calls.on_hold_calls)
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    // Esegue fetchStats ogni 5 secondi
    const interval = setInterval(fetchStats, 5000);

    // Pulisce l'intervallo quando il componente viene smontato per evitare memory leaks (Memoria inutile allocata che non viene liberata)
    return () => clearInterval(interval);

    // Esegue fetchStats all'avvio
    fetchStats();
  }, []);

  return (
    <div className='bg-slate-200 font-customFont'>
      {/* Navbar */}
      <Navbar/>
      {/* Widget*/}
      <Widget totalCalls={totalCalls} notAnsweredCalls={notAnsweredCalls} refusedCalls={refusedCalls} />
      {/* Grafici */}
      <Chart stats={stats}/>
      {/* Operatori elenco */}
      <Calls stats={stats} /> 
    </div>
  );
}

export default App;
