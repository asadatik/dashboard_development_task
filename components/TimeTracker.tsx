'use client';

import { useState } from 'react';
import { Play, Pause, Square } from 'lucide-react';

export function TimeTracker() {
  const [time, setTime] = useState('01:24:08');
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="mt-10   bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-6">Time Tracker</h3>

      <div className="text-center mb-8">
        <p className="text-5xl font-bold font-mono">{time}</p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`p-3 rounded-full transition ${
            isRunning
              ? 'bg-white text-emerald-600 hover:bg-gray-100'
              : 'bg-emerald-500/40 hover:bg-emerald-500/60'
          }`}
        >
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button className="p-3 rounded-full bg-red-500/20 hover:bg-red-500/30">
          <Square size={20} />
        </button>
      </div>
    </div>
  );
}
