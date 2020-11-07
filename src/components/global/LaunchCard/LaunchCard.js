import style from "./launchcard.module.scss";

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const LaunchCard = ({
  links,
  title = "",
  missionIds,
  flightNumber,
  year,
  launchSuccessStatus,
}) => {
  return (
    <article className={style.wrapper}>
      {links.mission_patch && (
        <Link href={links.wikipedia ? links.wikipedia : ""}>
          <a target="_blank" rel="noopener noreferrer">
            <figure className={style.imageWrapper}>
              <img
                src={links.mission_patch}
                width="180"
                height="200"
                alt={title}
                className={style.image}
              />
            </figure>
          </a>
        </Link>
      )}
      <Link href={links.wikipedia ? links.wikipedia : ""}>
        <a target="_blank" rel="noopener noreferrer">
          <h2
            className={`${style.title} text-blue fnt-700`}
          >{`${title} #${flightNumber}`}</h2>
        </a>
      </Link>
      {missionIds.length > 0 && (
        <>
          <h3 className={`${style.detailTitle} fnt-700 mb-20`}>Mission ids</h3>
          <ul className={style.missionIdList}>
            {missionIds.map((item, index) => (
              <li key={index}>
                <p className={`${style.missionId} text-blue`}>{item}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className={style.detailItem}>
        <p className={style.detailTitle}>launch year:</p>
        <p className={`${style.detailValue} fnt-400 text-blue text-capitalize`}>
          {year}
        </p>
      </div>
      <div className={style.detailItem}>
        <p className={style.detailTitle}>successful launch:</p>
        <p className={`${style.detailValue} fnt-400 text-blue text-capitalize`}>
          {`${launchSuccessStatus ? "Yes" : "No"}`}
        </p>
      </div>
      <div className={style.detailItem}>
        <p className={style.detailTitle}>successful landing:</p>
        <p className={`${style.detailValue} fnt-400 text-blue text-capitalize`}>
          {"N/A"}
        </p>
      </div>
    </article>
  );
};

export default LaunchCard;
