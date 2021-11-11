import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import styled from "styled-components";
import Store from "./components/Pages/Store";
import AboutUs from "./components/Pages/AboutUs";
import Services from "./components/Pages/Services";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
const Container = styled.div`
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
