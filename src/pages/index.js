import { useEffect } from "react";
import LaunchListContextProvider from "../components/Contexts/LaunchListContext";
import { API } from "../components/global/Util";

import Layout from "../components/global/Layout";
import Filter from "../components/Home/Filter/Filter";
import LaunchContent from "../components/Home/LaunchContent";

import style from "../sass/layouts/home.module.scss";

export default function Home({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <LaunchListContextProvider data={data}>
        <section className={style.wrapper}>
          <Filter />
          <LaunchContent />
        </section>
      </LaunchListContextProvider>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${API.host}/launches?limit=${API.limit}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
