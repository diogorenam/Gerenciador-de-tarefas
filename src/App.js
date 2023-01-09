import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer";
import Company from "./components/pages/Company";

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar/>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/contato" element={<Contact />}></Route>
            <Route exact path="/projetos" element={<NewProject />}></Route>
            <Route exact path="/empresa" element={<Company />}></Route>
          </Routes>
        </Container>
        <Footer/>
      </Router>

    </div>
  )
}

export default App;
