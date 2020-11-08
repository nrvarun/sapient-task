import { useContext, useEffect, useState } from "react";
import { LaunchListContext } from "../../Contexts/LaunchListContext";
import { API } from "../../global/Util";

import FilterContent from "../../global/FilterContent/FilterContent";
import style from "./filter.module.scss";

import { useRouter } from "next/router";

const Filter = () => {
  const [YEARS] = useState([
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
  const [LAUNCH_STATUSES] = useState(["true", "false"]);
  const [LANDING_STATUSES] = useState(["true", "false"]);
  const [programsData, setPrograms] = useContext(LaunchListContext);

  const router = useRouter();

  const [filterState, setFilter] = useState({
    isFilterApplied: false,
    filterYear: null,
    filterLaunchStatus: null,
    filterLandingStatus: null,
  });

  useEffect(() => {
    const { filter } = programsData;
    const hasFiltersApplied = Object.keys(filter).length;

    if (hasFiltersApplied) {
      const { launch_year, land_success, launch_success } = filter;

      console.log("Update filter", launch_year, land_success, launch_success);

      setFilter({
        isFilterApplied: true,
        filterYear: launch_year !== undefined ? launch_year : null,
        filterLaunchStatus:
          launch_success !== undefined ? launch_success : null,
        filterLandingStatus: land_success !== undefined ? land_success : null,
      });
    }

    console.log(programsData);
  }, []);

  const handleFilter = async (name, value) => {
    switch (name) {
      case "launchstatus":
        setFilter({
          ...filterState,
          isFilterApplied: true,
          filterLaunchStatus: value,
        });
        break;
      case "landingstatus":
        setFilter({
          ...filterState,
          isFilterApplied: true,
          filterLandingStatus: value,
        });
        break;
      case "launchyear":
        setFilter({
          ...filterState,
          isFilterApplied: true,
          filterYear: value,
        });
        break;
    }

    setPrograms({
      ...programsData,
      isAPILoading: true,
    });
  };

  useEffect(() => {
    const queryParams = [];
    const BASE_URL = `${API.host}/launches`;
    const {
      filterYear,
      filterLaunchStatus,
      filterLandingStatus,
      isFilterApplied,
    } = filterState;

    console.log("filterState changed");

    let query = BASE_URL;

    if (filterLaunchStatus !== null) {
      queryParams.push(`launch_success=${filterLaunchStatus}`);
    }

    if (filterLandingStatus !== null) {
      queryParams.push(`land_success=${filterLandingStatus}`);
    }

    if (filterYear !== null) {
      queryParams.push(`launch_year=${filterYear}`);
    }

    query = `?limit=100&${queryParams.length > 0 ? queryParams.join("&") : ""}`;

    if (isFilterApplied) {
      router.push(query, query, {
        shallow: true,
      });

      fetch(`${BASE_URL}${query}`)
        .then((res) => res.json())
        .then((data) => {
          setPrograms({
            ...programsData,
            programs: [...data],
            isAPILoading: false,
          });
        });
    }
  }, [filterState]);

  const clearFilters = () => {
    console.log("lets clear filters");
    router.push("/", { shallow: true });

    setFilter({
      ...filterState,
      isFilterApplied: false,
      filterYear: null,
      filterLaunchStatus: null,
      filterLandingStatus: null,
    });

    setPrograms({
      ...programsData,
      isAPILoading: true,
    });

    fetch(`${API.host}/launches?limit=100
    `)
      .then((res) => res.json())
      .then((data) => {
        setPrograms({
          ...programsData,
          programs: [...data],
          isAPILoading: false,
        });
      });
  };

  const { isFilterApplied } = filterState;

  return (
    <aside className={style.sidebar}>
      <div className={style.sidebarContent}>
        {isFilterApplied && (
          <button className={style.clearFilter} onClick={clearFilters}>
            <span>clear</span>
            <img src={"./reset-filter.svg"} alt="clear filter" />
          </button>
        )}
        <h2 className={style.heading}>filters</h2>
        <FilterContent
          title="launch year"
          data={YEARS}
          filterType="radio"
          selectedValue={filterState.filterYear}
          handleFilterChange={handleFilter}
        />
        <FilterContent
          title="launchstatus"
          data={LAUNCH_STATUSES}
          filterType="radio"
          selectedValue={filterState.filterLaunchStatus}
          handleFilterChange={handleFilter}
        />
        <FilterContent
          title="landingstatus"
          data={LANDING_STATUSES}
          filterType="radio"
          selectedValue={filterState.filterLandingStatus}
          handleFilterChange={handleFilter}
        />
      </div>
    </aside>
  );
};

export default Filter;
