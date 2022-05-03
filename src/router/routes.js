import Error from "../pages/Error";
import Home from "../pages/Home";
import PostId from "../pages/PostId";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Login from "../pages/Login";

export const PrivateRoutes = [
  { path: "/home", element: Home, link: "Home" },

  { path: "/", element: Posts, link: "Posts" },
  { path: "/about", element: About, link: "About" },

  { path: "/posts/:id", element: PostId },

  { path: "/*", element: Error },
];

export const PublicRoutes = [
  { path: "/", element: Login },

  { path: "/*", element: Error },
];
