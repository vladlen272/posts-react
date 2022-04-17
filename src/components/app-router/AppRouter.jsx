import { Routes, Route } from "react-router-dom";
import { routes } from "../../router/routes";


import Posts from "../../pages/Posts";
import About from "../../pages/About";
import Error from "../../pages/Error";
import Home from "../../pages/Home";
import PostId from "../../pages/PostId";


function AppRouter() {
  return (
    <Routes>

      {routes.map((route) => 
        <Route key={route.path} path={route.path} element={<route.element/>}/>
      )}
    </Routes>
  );
}

export default AppRouter;