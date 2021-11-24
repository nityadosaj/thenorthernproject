import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";

const App = () => {

  // needs to implement private route and public route in the future 
  // private route -- when a user is logged in, he can see all detailed pages
  // public route -- login page
  //

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* private route */}
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" />
          <Route path="/podcast" />
          <Route path="/arcticissues" />
          <Route path="/wordfrommembers" />
          <Route path="/allies" />
          <Route path="/updates" />
          <Route path="/donate" />

          {/* public route */}
          <Route path="/login" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
