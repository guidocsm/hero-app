import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './components/auth/authContext';
import { authReducer } from './components/auth/authReducer';
import AppRouter from './components/routers/AppRouter';

const init = () => {
    return JSON.parse(localStorage.getItem("user")) || {logged: false};
}


const HeroesApp = () => {
  
  const [user, dispatch] = useReducer(authReducer, {}, init);
  
  useEffect(() => {
    if (!user) return;

    localStorage.getItem("user", JSON.stringify(user));
  }, [user]);

  return (
      <>
        <AuthContext.Provider value={{user, dispatch}}>
          <AppRouter />
        </AuthContext.Provider>
      </>
  )
};

export default HeroesApp;