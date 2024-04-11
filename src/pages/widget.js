import React from 'react';
import calls from '../assets/calling.png';
import approval from '../assets/approval.png';
import refused from '../assets/refused.png';

function Widget({ totalCalls, notAnsweredCalls, refusedCalls }) {
  return (
    <div className="grid justify-center sm:flex"> 
      <div className='bg-slate-400 rounded-lg ml-10 hover:bg-slate-600 transition-colors w-60 pt-1 flex flex-col items-center mb-3'> 
        <img className='w-10 m-auto bg-slate-200 rounded-lg p-2 mt-5' src={approval} alt="Calls"></img>
        <p className='font-semibold text-sm text-center m-5'>Chiamate Totali</p>
        <p className='text-center font-bold text-4xl mt-5 mb-5'>{totalCalls}</p>
      </div>

      <div className='bg-slate-400 rounded-lg ml-10 hover:bg-slate-600 transition-colors w-60 pt-1 flex flex-col items-center mb-3 '> 
        <img className='w-10 m-auto bg-slate-200 rounded-lg p-2 mt-5' src={calls} alt="Calls"></img>
        <p className='font-semibold text-sm text-center m-5'>Chiamate senza Risposta</p>
        <p className='font-bold text-4xl text-center mt-5 mb-5'>{notAnsweredCalls}</p>
      </div>

      <div className='bg-slate-400 rounded-lg ml-10 hover:bg-slate-600 transition-colors w-60 pt-1 flex flex-col items-center mb-3'> 
        <img className='w-10 m-auto bg-slate-200 rounded-lg p-2 mt-5' src={refused} alt="Calls"></img>
        <p className='font-semibold text-sm text-center m-5'>Chiamate Rifiutate</p>
        <p className='font-bold text-4xl text-center mt-5 mb-5'>{refusedCalls}</p>
      </div>
    </div>
  );
}

export default Widget;
