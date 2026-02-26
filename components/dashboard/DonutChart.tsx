'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import type { Analytics } from '@/lib/types';

interface DonutChartProps {
  analytics: Analytics[];
}

export function DonutChart({ analytics }: DonutChartProps) {
  // Aggregate analytics data
  const data = analytics.length > 0 
    ? [
        { name: 'Views', value: analytics.reduce((sum, a) => sum + a.views, 0) },
        { name: 'Clicks', value: analytics.reduce((sum, a) => sum + a.clicks, 0) },
        { name: 'Conversions', value: analytics.reduce((sum, a) => sum + a.conversions, 0) },
      ]
    : [
        { name: 'Views', value: 4200 },
        { name: 'Clicks', value: 2400 },
        { name: 'Conversions', value: 1600 },
      ];

  const colors = ['#10b981', '#06b6d4', '#f59e0b'];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Analytics Overview</h3>
      <div className="h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => value.toLocaleString()}
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span className="text-sm text-slate-600">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
