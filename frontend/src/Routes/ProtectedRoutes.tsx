import React, { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

type Props = { children: React.ReactNode };

export const ProtectedRoute = ({ children }: Props) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export const ProtectedPremium = ({ children }: Props) => {
  const location = useLocation();
  const { isPremium, isLoggedIn } = useAuth();

  return isLoggedIn() ? (
      isPremium() ? (
        <>{children}</>
      ):(
        <Navigate to="/premiumPlan" state={{ from: location }} replace />
      )
    ):(
      <Navigate to="/login" state={{ from: location }} replace />
    )
};

export const ProtectedAuth = ({ children }: Props) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? (
    <Navigate to="/sub" state={{ from: location }} replace />
  ) : (
    <>{children}</>
  );
}