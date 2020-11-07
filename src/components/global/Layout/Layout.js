import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>SpaceX</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="SpaceX Lauch programs" />
        <meta name="keywords" content="spacex, missile, programs" />
        <meta name="author" content="Varun Narecode Radhakrishnan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
