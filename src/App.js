import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Navigation";
import MainContainer from "./page/main-container";

function App() {
  const [page, setPage] = useState("about");


  return (
    <section className="my-3">
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}
        <h1> Emily Pierson </h1>
        <Nav setPage={setPage} />
      </header>
      <MainContainer page={page} />
      <Footer />
    </section>
  );
}

export default App;
