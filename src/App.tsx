import "./styles/styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import DownloadResume from "./components/DownloadResume";
import Error404 from "./components/Error404";
// import ReactGA4 from "react-ga4";

function App() {
  // const _Ga4MeasurementId = "G-7QD6WJMQTD";
  // ReactGA4.initialize(_Ga4MeasurementId);
  // ReactGA4.send({ hitType: "pageview", page: "/", title: "Home" });

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/resume"
            element={<Resume />}
            // element={
            //   <Navigate
            //     to="/resume.pdf"
            //     replace
            //   />
            // }
          />
          <Route
            path="/resume-download"
            element={<DownloadResume />}
          />
          <Route
            path="*"
            element={<Error404 />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
