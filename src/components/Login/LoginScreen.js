import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";

const LoginScreen = () => {

  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext);


  const handleLogin = () => {
      const action = {
          type: types.login,
          payload: {name: "Guido"}
      }
      dispatch(action);

      navigate("/marvel", {
        replace: true
      });
  };

  return (
      <div className="container mt-5">
          <h1>Login</h1>
          <hr />

          <button onClick={handleLogin} className="btn btn-primary">Login</button>
      </div>
  )
};

export default LoginScreen;