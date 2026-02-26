'use client';

import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/lib/types';

interface ProjectsTableProps {
  products: Product[];
}

export function ProjectsTable({ products }: ProjectsTableProps) {
  const displayProducts = products.slice(0, 4);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-bold text-slate-900">Recent Products</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600">Price</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600">Sales</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {displayProducts.map((product, index) => (
              <tr key={index} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      {product.id.toString().charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-slate-900">Product {product.id}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-slate-900">${product.price}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-emerald-600">{product.sales}</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium">
                    {product.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
