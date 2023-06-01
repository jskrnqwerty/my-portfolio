import "./styles/styles.css";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

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
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
