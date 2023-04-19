import React from "react";
import { useAuth } from "../../utils/AuthProvider";

const Login = () => {
  const {onLogin} =  useAuth();

  const login = (e) => {
    e.preventDefault();
    onLogin({
      name: "Arthur Lima", 
      email: "arthurdeolima@ufmg.br",
      phone: "31992489918"
    });
  }

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
