import { useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";


const LoginScreen = () => {

  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext);


  const handleLogin = () => {

      const action = {
        type: types.login,
        payload: {name: "Guido"},
      };

      dispatch(action);

      const lastPath = localStorage.getItem("lastPath") || "/";
      navigate(lastPath, {
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