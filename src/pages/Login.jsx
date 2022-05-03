import { useContext } from "react";
import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import { AuthContext } from "../context/context";

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", "true")
    }
  return (
    <div>
      <h1
        style={{
          fontSize: "26px",
          margin: "35px 0 10px",
          fontWeight: "600",
          textAlign: "center"
        }}
      >
        Login
      </h1>
      <form onSubmit={(event) => login(event)}>
        <Input placeholder="enter your login" />
        <Input placeholder="enter your password" />
        <Button>Log in</Button>
      </form>
    </div>
  );
}

export default Login;
