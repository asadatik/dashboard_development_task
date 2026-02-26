'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  BarChart3, 
  Settings,
  ChevronRight 
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: CheckSquare, label: 'Tasks', href: '#' },
  { icon: Calendar, label: 'Calendar', href: '#' },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white transition-all duration-300 z-40 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
    >
      <div className="p-4 flex items-center justify-between h-20">
        <div className={`text-2xl font-bold text-emerald-300 ${isExpanded ? 'block' : 'hidden'}`}>
          Tasks
        </div>
        <div className={`text-2xl font-bold text-emerald-300 ${!isExpanded ? 'block' : 'hidden'}`}>
          T
        </div>
      </div>

      <nav className="mt-8 space-y-2 px-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
              item.active
                ? 'bg-emerald-600/40 text-white border-l-4 border-emerald-300'
                : 'text-emerald-100 hover:bg-emerald-700/30'
            }`}
          >
            <item.icon className="w-6 h-6 flex-shrink-0" />
            <span className={`${isExpanded ? 'block' : 'hidden'} font-medium whitespace-nowrap`}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
