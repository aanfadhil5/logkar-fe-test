import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const name = sessionStorage.getItem("name");

  let auth = name;
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
