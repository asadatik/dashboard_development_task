'use client';

import { Bell, Search, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { clearToken } from '@/lib/auth';

export function Navbar() {
  const router = useRouter();

  function handleLogout() {
    clearToken();
    router.push('/');
  }

  return (
    <nav className="fixed top-0 left-20 lg:left-64 right-0 h-20 bg-white border-b border-slate-200 backdrop-blur-sm bg-white/80 z-30">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500 bg-slate-50"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 ml-6">
          {/* Notifications */}
          <button className="relative p-2 text-slate-600 hover:text-emerald-600 transition">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900">Tomas Harper</p>
              <p className="text-xs text-slate-500">Manager</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              TH
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="p-2 text-slate-600 hover:text-red-600 transition"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
