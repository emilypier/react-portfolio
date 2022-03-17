import Nav from "../Navigation";

function Header({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}

        <h1> {name}</h1>

        <Nav/>
      </header>
    </div>
  );
}

export default Header;
