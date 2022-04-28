import React from "react";
import { useDispatch } from "react-redux";
import { loginUserWithEmailPasswordAction } from "../redux/actions/actions";

const Login = () => {
  const dispatch = useDispatch();
  <div className=""></div>;
  return (
    <>
      <h2>Inicia Sesion</h2>
      <h3>Gestor de Tarjetas</h3>
      <form
        onSubmit={(email, password) =>
          dispatch(loginUserWithEmailPasswordAction(email, password))
        }
      >
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <button type="submit">Iniciar Sesion</button>
      </form>
    </>
  );
};

export default Login;
