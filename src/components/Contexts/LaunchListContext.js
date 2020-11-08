import { createContext, useEffect, useState } from "react";

export const LaunchListContext = createContext(null);

export const LaunchListContextProvider = ({ children, data }) => {
  const [programsData, setPrograms] = useState({
    programs: [...data.programs],
    isAPILoading: false,
    filter: { ...data.query },
  });

  return (
    <LaunchListContext.Provider value={[programsData, setPrograms]}>
      {children}
    </LaunchListContext.Provider>
  );
};

export default LaunchListContextProvider;
