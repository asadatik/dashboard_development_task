'use client';

import { ArrowUpRight, Clock, DollarSign, Users } from 'lucide-react';
import type { Product } from '@/lib/types';
import { motion } from 'framer-motion';

interface ProjectsTableProps {
  products: Product[];
}

export function ProjectsTable({ products }: ProjectsTableProps) {
  const displayProducts = products.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-500"
    >
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-b border-emerald-100/50 p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/80 to-teal-500/80 rounded-2xl flex items-center justify-center shadow-lg">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
              Recent Projects
            </h3>
            <p className="text-emerald-600/80 text-sm font-medium flex items-center gap-1">
              4 active projects
            </p>
          </div>
        </div>
      </div>

      {/* Premium Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-slate-50/80 to-emerald-50/80 backdrop-blur-sm border-b border-emerald-100/50">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Project
              </th>
              <th className="px-8 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Budget
              </th>
              <th className="px-8 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Tasks
              </th>
              <th className="px-8 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/50">
            {displayProducts.map((product, index) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group hover:bg-emerald-50/50 hover:backdrop-blur-sm border-b border-slate-100/50 transition-all duration-300 cursor-pointer"
              >
                {/* Project Name */}
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <span className="text-white font-bold text-lg">
                        {product.name.charAt(0).toUpperCase()}
                      </span>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-sm text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Due Mar 15
                      </p>
                    </div>
                  </div>
                </td>

                {/* Budget */}
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span className="font-bold text-xl text-slate-900">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                </td>

                {/* Sales/Tasks */}
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold">
                    <span className="text-2xl">{product.sales}</span>
                    <ArrowUpRight className="w-5 h-5 animate-pulse" />
                    <span className="text-sm text-emerald-500">tasks</span>
                  </div>
                </td>

                {/* Category Badge */}
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r rounded-full text-sm font-semibold shadow-md transition-all duration-300 ${
                    product.category === 'subscription' 
                      ? 'from-emerald-100 via-emerald-200 to-teal-200 text-emerald-800 hover:from-emerald-200 hover:shadow-emerald-200/50' 
                      : 'from-blue-100 via-blue-200 to-indigo-200 text-blue-800 hover:from-blue-200 hover:shadow-blue-200/50'
                  }`}>
                    {product.category.toUpperCase()}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Premium Footer */}
      <div className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border-t border-emerald-100/30 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Showing 4 of {products.length} projects</span>
          <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1 hover:underline transition">
            View All <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
