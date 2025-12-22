import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

function ProtectRouter({children}){
  const Navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token")

  if (!isAuthenticated) {
    // kalau belum login → redirect ke /login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default ProtectRouter;