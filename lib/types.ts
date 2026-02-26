// Authentication Types
export interface LoginResponse {
  id: number;
  email: string;
  token: string;
}

// Dashboard Data Types
export interface Overview {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: string;
}

export interface Analytics {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

export interface Product {
  id: string;
  price: number;
  sales: number;
  category: string;
}

export interface DashboardResponse {
  overview: Overview;
  users: User[];
  analytics: Analytics[];
  products: Product[];
}
