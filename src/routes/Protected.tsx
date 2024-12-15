import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function Protected({ permissionId = null }) {
  const { auth } = useAuth();
  const location = useLocation();
  //   const isPermitted =  user?.permissions?.includes(permissionId);
  const isPermitted = auth.user;
  const isAuthenticated = auth.user;

  return isPermitted ? (
    <Outlet />
  ) : isAuthenticated ? (
    <Navigate to="/not-permitted" state={{ form: location }} replace />
  ) : (
    <Navigate to="/login" state={{ form: location }} replace />
  );
}
