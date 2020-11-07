import { useContext, useEffect, useState } from "react";
import { LaunchListContext } from "../../Contexts/LaunchListContext";
import LaunchCard from "../../global/LaunchCard/LaunchCard";
import style from "./launchcontent.module.scss";

const LaunchContent = () => {
  const [launchData, setLaunchData] = useState([]);
  const data = useContext(LaunchListContext);

  useEffect(() => {
    setLaunchData(data);
  }, []);

  return (
    <section className={style.wrapper}>
      <ul className={style.list}>
        {launchData.map(
          (
            {
              links,
              mission_name,
              mission_id,
              flight_number,
              launch_year,
              launch_success,
            },
            index
          ) => (
            <li key={index} className={style.listItem}>
              <LaunchCard
                flightNumber={flight_number}
                missionIds={mission_id}
                title={mission_name}
                links={links}
                year={launch_year}
                launchSuccessStatus={launch_success}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default LaunchContent;
