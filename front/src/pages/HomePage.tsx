import { useToken } from "@/stores/authentication";
import { Navigate, Outlet } from "react-router-dom";

export default function HomePage() {
  const token = useToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
}
