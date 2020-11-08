import { useRouter } from "next/router";
import { memo, useContext, useState } from "react";
import { LaunchListContext } from "../../Contexts/LaunchListContext";
import EmptyState from "../../global/EmptyState";
import LaunchCard from "../../global/LaunchCard/LaunchCard";
import Loader from "../../global/Loader";
import style from "./launchcontent.module.scss";

const LaunchContent = () => {
  const [programsData, setPrograms] = useContext(LaunchListContext);

  const router = useRouter();

  return (
    <section className={style.wrapper}>
      {!programsData.isAPILoading ? (
        <>
          {programsData.programs.length > 0 ? (
            <ul className={style.list}>
              {programsData.programs.map(
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
          ) : (
            <EmptyState />
          )}
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default memo(LaunchContent);
