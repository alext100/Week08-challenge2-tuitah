import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
