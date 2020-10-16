import React, { createContext, useContext, useMemo, useState } from "react";

const ActiveProductContext = createContext();

export function ActiveProductProvider(props) {
  const [activeProduct, setActiveProduct] = useState(null);
  const api = useMemo(() => ({ activeProduct, setActiveProduct }), [
    activeProduct,
    setActiveProduct,
  ]);
  return (
    <ActiveProductContext.Provider value={api}>
      {props.children}
    </ActiveProductContext.Provider>
  );
}

export const useActiveProductContext = () => useContext(ActiveProductContext);
