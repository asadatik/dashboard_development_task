'use client';

import { 
  Bell, 
  Search, 
  LogOut, 
  ChevronDown, 
  Settings 
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clearToken } from '@/lib/auth';

export function Navbar() {
  const router = useRouter();
  const [searchActive, setSearchActive] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  function handleLogout() {
    clearToken();
    router.push('/');
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-20 lg:left-64 right-0 h-20 z-40 backdrop-blur-xl bg-white/90 border-b border-white/50 shadow-xl shadow-emerald-500/5"
    >
      <div className="h-full px-6 lg:px-8 flex items-center justify-between">
        {/* Animated Search Bar */}
        <motion.div 
          className={`flex-1 max-w-md transition-all duration-300 ${searchActive ? 'max-w-2xl' : ''}`}
          animate={{ width: searchActive ? 'auto' : '100%' }}
        >
          <div className="relative group">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${searchActive ? 'text-emerald-500' : 'text-slate-400'}`} />
            <input
              type="text"
              placeholder="Search projects, tasks, team..."
              className={`w-full pl-12 pr-12 py-3 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:backdrop-blur-sm shadow-lg ${
                searchActive 
                  ? 'border-emerald-400 bg-white/100 shadow-emerald-200/50 scale-105' 
                  : 'border-slate-200/50 bg-white/60 hover:border-slate-300 hover:shadow-md'
              }`}
              onFocus={() => setSearchActive(true)}
              onBlur={() => setSearchActive(false)}
            />
            <motion.button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-emerald-500/10 group-hover:scale-110 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Premium Right Section */}
        <div className="flex items-center gap-4 ml-6 pl-6 border-l border-slate-100/50">
          
          {/* Animated Notifications */}
          <motion.button
            className="relative p-2.5 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm border border-emerald-100/50 hover:bg-emerald-100/80 hover:shadow-emerald-200/30 transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Bell className="w-5 h-5 text-slate-700 group-hover:text-emerald-600" />
            <motion.div
              className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-xs font-bold text-white">3</span>
            </motion.div>
          </motion.button>

          {/* Premium Profile Dropdown */}
          <motion.div 
            className="relative"
            animate={profileOpen ? { scale: 1.02 } : { scale: 1 }}
          >
            <motion.button
              className="flex items-center gap-3 p-2.5 rounded-2xl bg-gradient-to-br from-slate-50/80 to-slate-100/80 backdrop-blur-sm border border-slate-200/50 hover:bg-slate-100 hover:shadow-lg hover:border-slate-300/50 transition-all duration-300 shadow-md group"
              onClick={() => setProfileOpen(!profileOpen)}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-3 group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-sm tracking-tight">TH</span>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-semibold text-slate-900 group-hover:text-slate-800">Tomas Harper</p>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  Manager
                </p>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 py-2"
                >
                  <div className="px-4 py-3 border-b border-slate-100/50">
                    <p className="font-semibold text-slate-900">Tomas Harper</p>
                    <p className="text-sm text-slate-500">tomas@company.com</p>
                  </div>
                  <a className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50/50 transition rounded-xl mx-1 mt-1" href="/profile">
                    <Settings className="w-4 h-4 text-slate-500" />
                    Settings
                  </a>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50/50 transition rounded-xl mx-1 font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
