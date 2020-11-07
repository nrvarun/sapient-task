import { createContext, useState } from "react";

export const LaunchListContext = createContext(null);

export const LaunchListContextProvider = ({ children, data }) => {
  const [programsData, setPrograms] = useState({
    programs: [...data],
    isAPILoading: false,
  });

  return (
    <LaunchListContext.Provider value={[programsData, setPrograms]}>
      {children}
    </LaunchListContext.Provider>
  );
};

export default LaunchListContextProvider;
