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
  const page = {
    home: { title: "Home", path: "/" },
    resume: { title: "Resume", path: "/resume" },
    downloadResume: { title: "Download Resume", path: "/resume-download" },
  };

  const location = useLocation();
  const _Ga4MeasurementId = "G-7QD6WJMQTD";
  useEffect(() => {
    ReactGA4.initialize(_Ga4MeasurementId);
    // ReactGA4.send({ hitType: "pageview", page: "/", title: "Home" });
    ReactGA4.send({ hitType: "pageview", page: location.pathname });
    console.log("location:", location.pathname);
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
