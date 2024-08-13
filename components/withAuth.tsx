'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const WithProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  let isAuthenticated: boolean = true;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log("isAuthenticated: ", isAuthenticated);
      isAuthenticated =
        localStorage.getItem('token') !== undefined &&
        localStorage.getItem('token') !== "";
    }
    if (!isAuthenticated) {
      router.push('/login'); // Redirect to login if not authenticated
    } else {
      router.forward();
    }
  }, [isAuthenticated, router]);

  // If not authenticated, return null or a loading spinner
  if (!isAuthenticated) {
    return null; // Or you can return a loading spinner or some placeholder
  }

  return <>{children}</>; // Render the children if authenticated
};
