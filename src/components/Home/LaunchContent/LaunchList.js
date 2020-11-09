import style from './launchcontent.module.scss'

import LaunchCard from "../../global/LaunchCard/LaunchCard";


const LaunchList = ({programs}) => {
    return (
        <ul className={style.list}>
              {programs.map(
                (
                  {
                    links,
                    mission_name,
                    mission_id,
                    flight_number,
                    launch_year,
                    launch_success,
                    rocket
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
                      landingStatus={rocket.first_stage.cores[0].land_success}
                    />
                  </li>
                )
              )}
            </ul>
    )
}

export default LaunchList
