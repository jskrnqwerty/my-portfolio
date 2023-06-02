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
// import Resume2 from "./components/Resume2";

function App() {
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
