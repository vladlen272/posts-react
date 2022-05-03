import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { PrivateRoutes, PublicRoutes } from "../../router/routes";

function AppRouter() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
    <Routes>
      {isAuth
        ? PrivateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))
        : PublicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
    </Routes>
  );
}

export default AppRouter;
