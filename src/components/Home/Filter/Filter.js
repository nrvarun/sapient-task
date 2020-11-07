import { uniq } from "lodash";
import { useContext, useEffect, useState } from "react";
import { LaunchListContext } from "../../Contexts/LaunchListContext";
import FilterContent from "../../global/FilterContent/FilterContent";
import style from "./filter.module.scss";

const Filter = () => {
  const [years, setYears] = useState([]);
  const [launchStatuses] = useState(["true", "false"]);
  const launches = useContext(LaunchListContext);

  useEffect(() => {
    const launchYears = launches.map((launch) => launch.launch_year);
    const uniqLaunchYears = uniq(launchYears);
    setYears(uniqLaunchYears);
    console.log(uniqLaunchYears);
  }, []);

  return (
    <aside className={style.sidebar}>
      <div className={style.sidebarContent}>
        <h2 className={style.heading}>filters</h2>
        <FilterContent title="launch year" data={years} filterType="radio" />
        <FilterContent
          title="successful launch"
          data={launchStatuses}
          filterType="radio"
        />
        <FilterContent
          title="successful landing"
          data={launchStatuses}
          filterType="radio"
        />
      </div>
    </aside>
  );
};

export default Filter;
