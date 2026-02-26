'use client';

import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react';
import type { Overview } from '@/lib/types';

interface StatsCardsProps {
  overview: Overview;
}

export function StatsCards({ overview }: StatsCardsProps) {
  const stats = [
    {
      icon: Users,
      label: 'Total Users',
      value: overview.totalUsers.toLocaleString(),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Zap,
      label: 'Active Users',
      value: overview.activeUsers.toLocaleString(),
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      icon: DollarSign,
      label: 'Revenue',
      value: `$${overview.revenue.toLocaleString()}`,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: TrendingUp,
      label: 'Growth',
      value: `${overview.growth}%`,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
            </div>
            <div className={`${stat.bgColor} p-3 rounded-lg`}>
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
