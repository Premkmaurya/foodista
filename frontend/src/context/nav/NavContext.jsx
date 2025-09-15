import React, { createContext, useState } from "react";


export const NavbarContext = createContext(null);

function NavContext({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ open, setOpen }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavContext;