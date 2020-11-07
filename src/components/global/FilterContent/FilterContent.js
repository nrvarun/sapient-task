import { useContext, useEffect, useState } from "react";
import { LaunchListContext } from "../../Contexts/LaunchListContext";
import FilterBox from "../FilterBox";
import { API } from "../Util";
import style from "./filtercontent.module.scss";

const FilterContent = ({ title = "", data, filterType = "" }) => {
  const [programsData, setPrograms] = useContext(LaunchListContext);

  const [filterYear, setFilterYear] = useState("");

  const handleFilter = (e) => {
    const year = e.target.value;
    setFilterYear(year);
    setPrograms({
      ...programsData,
      isAPILoading: true,
    });
  };

  useEffect(() => {
    console.log("fetch new data");

    fetch(`${API.host}/launches?limit=100&launch_year=${filterYear}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPrograms({
          ...programsData,
          programs: [...data],
          isAPILoading: false,
        });
      });
  }, [filterYear]);

  return (
    <div className={style.wrapper}>
      <p className={style.title} id={title.replace(" ", "")}>
        {title}
      </p>
      <ul className={style.list} role="radiogroup">
        {data.map((item, index) => (
          <li key={index}>
            <FilterBox
              title={title}
              value={item}
              id={index}
              type={filterType}
              setFilter={handleFilter}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterContent;
