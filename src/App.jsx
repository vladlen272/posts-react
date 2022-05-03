import React, { useEffect, useState } from "react";

import "./styles/App.css";

import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/app-router/AppRouter";
import { AuthContext } from "./context/context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  });


  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
        }}
      >
        {isAuth && <Navbar />}

        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
