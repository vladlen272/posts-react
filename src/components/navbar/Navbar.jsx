import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import classes from "./navbar.module.css";

function Navbar() {
  return (
    <div className={classes.navbar}>
      {routes.map((route) => (
        <Link className={classes.item} key={route.path} to={route.path}>
          {route.link}
        </Link>
      ))}
    </div> 
  );
}

export default Navbar;
