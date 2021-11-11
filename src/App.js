import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact />
        <Route path="/Store" />
        <Route path="/About" />
        <Route path="/Services" />
      </Routes>
    </Router>
  );
}

export default App;
