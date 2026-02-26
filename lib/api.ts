import { getToken, clearToken } from './auth';
import type { LoginResponse, DashboardResponse } from './types';

const BASE_URL = 'https://task-api-eight-flax.vercel.app';

interface FetchOptions extends RequestInit {
  requiresAuth?: boolean;
}

async function apiCall<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { requiresAuth = false, ...fetchOptions } = options;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  if (requiresAuth) {
    const token = getToken();
    if (!token) {
      throw new Error('No authentication token found');
    }
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  // Handle token expiry
  if (response.status === 401) {
    clearToken();
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  }

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  return apiCall<LoginResponse>('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function getDashboardData(): Promise<DashboardResponse> {
  return apiCall<DashboardResponse>('/api/dashboard', {
    requiresAuth: true,
  });
}
