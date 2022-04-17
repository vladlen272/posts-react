import Error from "../pages/Error";
import Home from "../pages/Home";
import PostId from "../pages/PostId";
import Posts from "../pages/Posts";
import About from "../pages/About";

export const routes = [
  { path: "/", element: Home, link: "Home" },

  { path: "/posts", element: Posts, link: "Posts" },
  { path: "/about", element: About, link: "About" },

  { path: "/posts/:id", element: PostId },
  { path: "/*", element: Error },
];
