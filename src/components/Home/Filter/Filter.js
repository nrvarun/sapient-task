import { useState } from "react";

import FilterContent from "../../global/FilterContent/FilterContent";
import style from "./filter.module.scss";

const Filter = () => {
  const [years] = useState([
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ]);
  const [launchStatuses] = useState(["true", "false"]);

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
