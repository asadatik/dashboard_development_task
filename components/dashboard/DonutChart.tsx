'use client';

import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend,
  RadialBarChart,
  RadialBar
} from 'recharts';
import { TrendingUp, Eye, MousePointer, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Analytics } from '@/lib/types';

interface DonutChartProps {
  analytics: Analytics[];
}

export function DonutChart({ analytics }: DonutChartProps) {
  // Aggregate real analytics data
  const data = analytics.length > 0 
    ? [
        { 
          name: 'Views', 
          value: analytics.reduce((sum, a) => sum + a.views, 0),
          icon: Eye,
          color: '#10b981'
        },
        { 
          name: 'Clicks', 
          value: analytics.reduce((sum, a) => sum + a.clicks, 0),
          icon: MousePointer,
          color: '#3b82f6'
        },
        { 
          name: 'Conversions', 
          value: analytics.reduce((sum, a) => sum + a.conversions, 0),
          icon: CheckCircle2,
          color: '#f59e0b'
        },
      ]
    : [];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const COLORS = ['#10b981', '#3b82f6', '#f59e0b'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden hover:shadow-emerald-500/20 hover:border-emerald-200/50 transition-all duration-500"
    >
    
      <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-600/5 backdrop-blur-sm border-b border-emerald-100/30 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
              <TrendingUp className="w-6 h-6 text-white drop-shadow-md" />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 bg-clip-text text-transparent">
                Project Analytics
              </h3>
              <p className="text-emerald-600/90 text-sm font-semibold flex items-center gap-1 mt-1">
                {total.toLocaleString()} total interactions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">

        <div className="h-80 flex items-center justify-center relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%" 
                innerRadius={70}
                outerRadius={95}
                cornerRadius={8}
                paddingAngle={3}
                dataKey="value"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth={3}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="drop-shadow-lg"
                  />
                ))}
              </Pie>
              

              <foreignObject x="45%" y="40%" width="50" height="50">
                <div className="flex flex-col items-center text-center bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/50 min-w-[100px]">
                  <motion.div 
                    className="text-2xl font-bold text-slate-900"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {total.toLocaleString()}
                  </motion.div>
                  <span className="text-xs text-slate-500 font-medium">Total</span>
                </div>
              </foreignObject>

              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  fontWeight: 600
                }}
                formatter={(value: number) => [`${value.toLocaleString()}`, 'Interactions']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        
        <div className="mt-8 pt-6 border-t border-slate-100/50">
          <div className="flex justify-center gap-6">
            {data.map((entry, index) => (
              <motion.div
                key={entry.name}
                className="flex items-center gap-3 cursor-pointer group hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="w-4 h-4 rounded-full shadow-md"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <div className="text-right">
                  <div className="font-bold text-slate-900 text-sm group-hover:text-slate-700">
                    {entry.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {((entry.value / total) * 100).toFixed(1)}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
