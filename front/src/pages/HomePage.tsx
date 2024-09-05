import { useToken } from "@/stores/authentication";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", true);
  }, []);

  const token = useToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
}
