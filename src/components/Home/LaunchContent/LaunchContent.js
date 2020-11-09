import { useRouter } from "next/router";
import { memo, useContext, useState } from "react";
import { LaunchListContext } from "../../Contexts/LaunchListContext";
import EmptyState from "../../global/EmptyState";
import Loader from "../../global/Loader";
import style from "./launchcontent.module.scss";

import LaunchList from './LaunchList'

const LaunchContent = () => {
  const [programsData, setPrograms] = useContext(LaunchListContext);

  const router = useRouter();

  return (
    <section className={style.wrapper}>
      {!programsData.isAPILoading ? (
        <>
          {programsData.programs.length > 0 ? (
            <LaunchList programs={programsData.programs}/>
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
