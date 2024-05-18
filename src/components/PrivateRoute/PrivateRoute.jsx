
import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../routesPath";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={paths.LOGIN} />;
}

export default PrivateRoute;