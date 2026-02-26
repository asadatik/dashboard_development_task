'use client';

import { useState, useEffect } from 'react';
import { getDashboardData } from '@/lib/api';
import type { DashboardResponse } from '@/lib/types';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { StatsCards } from './StatsCards';
import { DonutChart } from './DonutChart';
import { ProjectsTable } from './ProjectsTable';
import { ProgressCircle } from './ProgressCircle';

export function Dashboard() {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const dashboardData = await getDashboardData();
        setData(dashboardData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-emerald-200 rounded-full animate-pulse mx-auto mb-4"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 font-semibold mb-2">Error</p>
          <p className="text-slate-600">{error || 'Failed to load dashboard'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Sidebar />
      <Navbar />
      
      {/* Main Content */}
      <main className="ml-20 lg:ml-64 mt-20 p-6 lg:p-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-2">Welcome back! Here's your task overview</p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8">
          <StatsCards overview={data.overview} />
        </div>

        {/* Charts and Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <DonutChart analytics={data.analytics} />
          </div>
          <div>
            <ProgressCircle />
          </div>
        </div>

        {/* Projects Table */}
        <div>
          <ProjectsTable products={data.products} />
        </div>
      </main>
    </div>
  );
}
