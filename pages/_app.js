import "bootstrap/dist/css/bootstrap.min.css";

import "bootswatch/dist/lux/bootstrap.min.css";
import { useEffect } from "react";
import "../public/css/style.css"
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
