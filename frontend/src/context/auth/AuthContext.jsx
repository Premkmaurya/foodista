import { createContext, useEffect, useState } from "react";

export const context = createContext(null);

function AuthContext({ children }) {
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    function checkAuthCookie() {
      return document.cookie.split(';').some((c) => c.trim().startsWith('token='));
    }
    setLoggedIn(checkAuthCookie());
  }, []);

  return (
    <context.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </context.Provider>
  );
}

export default AuthContext;

