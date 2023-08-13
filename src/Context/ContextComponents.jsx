import React, { createContext, useContext, useState } from "react";

const FloatingCompoContext = createContext();

export const useFloatingWindow = () => useContext(FloatingCompoContext);

export const FloatingProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <FloatingCompoContext.Provider
      value={{ activeComponent, setActiveComponent }}
    >
      {children}
    </FloatingCompoContext.Provider>
  );
};
