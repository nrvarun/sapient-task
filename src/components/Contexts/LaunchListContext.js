import { createContext } from "react";

export const LaunchListContext = createContext(null);

export const LaunchListContextProvider = ({ children, data }) => {
  return (
    <LaunchListContext.Provider value={data}>
      {children}
    </LaunchListContext.Provider>
  );
};

export default LaunchListContextProvider;
