'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    return { isAuthenticated };
}

export const WithProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth(); // Get the authentication status from your context or hook

  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated);
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
