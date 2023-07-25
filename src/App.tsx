import "./styles/styles.css";
import {
  Routes,
  Route,
  useLocation,
  // Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import DownloadResume from "./components/DownloadResume";
import Error404 from "./components/Error404";
import ReactGA4 from "react-ga4";
import { useEffect } from "react";

function App() {
  const GA4_MEASUREMENT_ID = import.meta.env.VITE_REACT_APP_GA4MEASUREMENTID;

  const page = {
    home: { title: "Home", path: "/" },
    resume: { title: "Resume", path: "/resume" },
    downloadResume: { title: "Download Resume", path: "/resume-download" },
  };

  const location = useLocation();

  useEffect(() => {
    const sendAnalyticsData = () => {
      ReactGA4.initialize(GA4_MEASUREMENT_ID);
      // ReactGA4.send({ hitType: "pageview", page: "/", title: "Home" });
      let sendTitle = "";
      switch (location.pathname) {
        case page.home.path:
          sendTitle = page.home.title;
          break;
        case page.resume.title:
          sendTitle = page.resume.title;
          break;
        case page.downloadResume.title:
          sendTitle = page.downloadResume.title;
          break;
      }
      ReactGA4.send({
        hitType: "pageview",
        page: location.pathname,
        hash: location.hash,
        title: sendTitle,
      });
      // console.log("path:", location.pathname);
      // console.log("hash:", location.hash);
    };

    sendAnalyticsData();
  }, [location]);

  return (
    <>
      <Routes>
        <Route
          path={page.home.path}
          element={<Home />}
        />
        <Route
          path={page.resume.path}
          element={<Resume />}
          // element={
          //   <Navigate
          //     to="/resume.pdf"
          //     replace
          //   />
          // }
        />
        <Route
          path={page.downloadResume.path}
          element={<DownloadResume />}
        />
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>
    </>
  );
}

export default App;
