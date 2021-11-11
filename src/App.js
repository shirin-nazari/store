import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
          <Route path="/Store" />
          <Route path="/About" />
          <Route path="/Services" />
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
