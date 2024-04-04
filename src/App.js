import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
