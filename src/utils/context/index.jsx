import React, { useState } from "react";

export const SourceContext = React.createContext();

export const SourceProvider = ({ children }) => {
  const [source, setSource] = useState("mock");
  const toggleSource = () => {
    setSource(source === "mock" ? "api" : "mock");
  };

  return (
    <SourceContext.Provider value={{ source, toggleSource }}>
      {children}
    </SourceContext.Provider>
  );
};