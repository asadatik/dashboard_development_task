'use client';

interface ProgressCircleProps {
  percentage?: number;
}

export function ProgressCircle({ percentage = 41 }: ProgressCircleProps) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col items-center justify-center">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Progress</h3>
      
      <div className="relative w-40 h-40 flex items-center justify-center">
        <svg width="180" height="180" className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="90"
            cy="90"
            r="45"
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="90"
            cy="90"
            r="45"
            stroke="#10b981"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute flex flex-col items-center">
          <span className="text-4xl font-bold text-emerald-600">{percentage}%</span>
          <span className="text-sm text-slate-500 mt-1">Complete</span>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-600">
          You're making great progress on your current tasks!
        </p>
      </div>
    </div>
  );
}
