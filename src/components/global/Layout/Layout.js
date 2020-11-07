import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>SpaceX</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
