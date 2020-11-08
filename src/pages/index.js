import LaunchListContextProvider from "../components/Contexts/LaunchListContext";
import { API } from "../components/global/Util";

import Layout from "../components/global/Layout";
import Filter from "../components/Home/Filter/Filter";
import LaunchContent from "../components/Home/LaunchContent";

import style from "../sass/layouts/home.module.scss";

export default function Home({ programs, query }) {
  return (
    <Layout>
      <LaunchListContextProvider data={{ programs, query }}>
        <section className={style.wrapper}>
          <Filter />
          <LaunchContent />
        </section>
      </LaunchListContextProvider>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const hasQuery = Object.keys(context.query).length;
  const routeParams = context.resolvedUrl.replace("/", "");

  let query = `?limit=${API.limit}`;

  if (hasQuery) {
    console.log(context);
    query = `${query}&${routeParams}`;
  }

  // Fetch data from external API
  const pgmRes = await fetch(`${API.host}/launches${query}`);
  const pgmData = await pgmRes.json();

  // Pass data to the page via props
  return { props: { programs: pgmData, query: context.query } };
}
