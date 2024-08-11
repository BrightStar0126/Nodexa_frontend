'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const WithProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  let isAuthenticated: boolean = false;

  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated);
    if (typeof window !== 'undefined') {
      const isAuthenticated =
        localStorage.getItem('token') !== undefined &&
        localStorage.getItem('token') !== "";
    }
    if (!isAuthenticated) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  // If not authenticated, return null or a loading spinner
  if (!isAuthenticated) {
    return null; // Or you can return a loading spinner or some placeholder
  }

  return <>{children}</>; // Render the children if authenticated
};
