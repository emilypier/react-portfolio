import { useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Nav from "./components/Navigation";
// import "./App.css";
import Project from "./components/Project";
import MainContainer from "./page/main-container";

function App() {
  const [page, setPage] = useState("about");


  return (
    <div>
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}
        <h1> Emily's Portfolio</h1>
        <Nav setPage={setPage} />
      </header>
      <MainContainer  page={page} />
      <Footer />
    </div>
  );
}

export default App;
