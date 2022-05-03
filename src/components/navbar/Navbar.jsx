import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { PrivateRoutes } from "../../router/routes";
import Button from "../UI/button/Button";
import classes from "./navbar.module.css";

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate()
  const logOut = () => {
    setIsAuth(false)
    navigate("/")
    localStorage.removeItem("auth")
  }
  return (
    <div className={classes.navbar}>
      <div>
        {PrivateRoutes.map((route) => (
          <Link className={classes.item} key={route.path} to={route.path}>
            {route.link}
          </Link>
        ))}
      </div>
      <div>
        <Button
          style={{ border: "none", margin: "0px 10px" }}
          onClick={logOut}
        >
          Log out
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
